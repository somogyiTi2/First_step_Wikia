const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Űrlapok beolvasása és statikus fájlok (CSS, képek stb.) kiszolgálása.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  // Minden bejövő kéréshez megpróbáljuk lekérni a 1. felhasználót az adatbázisból, és hozzáadni a request objektumhoz.
  User.findByPk(1)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

// Útvonalcsoportok regisztrálása.
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// Alapértelmezett 404 oldal.
app.use(errorController.get404);

//létrehoz egy új felhasználót a DB-ben, ha még nincs ilyen, és ezt a felhasználót hozzáadja a request objektumhoz minden bejövő kéréshez.
//CASCADE: ha egy felhasználó törlésre kerül, akkor az összes hozzá tartozó termék is törlődik.
Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
// Egy felhasználó több terméket is létrehozhat, ezért a User modellhez egy hasMany kapcsolatot adunk a Product modellel.
User.hasMany(Product);
// Egy felhasználóhoz egy kosár tartozik, ezért a User modellhez egy hasOne kapcsolatot adunk a Cart modellel.
User.hasOne(Cart);
// Egy kosár több felhasználó is tartalmazhat, ezért a Cart modellhez egy belongsTo kapcsolatot adunk a User modellel.
Cart.belongsTo(User);
// a belongsToMany kapcsolatot használjuk, mert egy kosár több terméket is tartalmazhat, és egy termék több kosárban is szerepelhet. A through opcióval megadjuk, hogy a CartItem modellt használjuk a kapcsolat táblájaként.
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

// A modellek szinkronizálása a MySQL-lel, majd a HTTP szerver indítása.
sequelize
  //.sync({ force: true })//ha ezzel futtatom akkor létrehozza db-t
  .sync() //ha ezzel akkor csak szinkronizálja a modelleket a db-vel, de nem hozza létre újra
  .then(result => {
    // A 1. felhasználó lekérése, mert ez a request objektumokban szerepel. A 1. felhasználó lekérése a bejövő kéréséhez használt SQL parancs:
    return User.findByPk(1);
    // console.log(result);
  })
  .then(user => {
    // Ha nincs ilyen felhasználó, akkor létrehozunk egy új felhasználót a megadott adatokkal.
    if (!user) {
      return User.create({ name: 'Tibor', email: 'hello@example.com' });
    }
    return user;
  })
  .then(user => {
    // console.log(user);
    // A hasOne kapcsolat által generált createCart() Promise-t visszaadjuk, hogy a lánc várja.
    return user.createCart();
  })
  .then(() => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
