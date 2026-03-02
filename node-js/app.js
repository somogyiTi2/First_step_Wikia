const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

// Az alkalmazás központi bekötése: hibakezelő és a konfigurált Sequelize példány.
const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');

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

// A modellek szinkronizálása a MySQL-lel, majd a HTTP szerver indítása.
sequelize
  .sync({ force: true })
  .then(result => {
    // A 1. felhasználó lekeréséhez használt SQL parancs:
    return User.findByPk(1);
    // console.log(result);
    app.listen(3000);
  })
  .then(user => {
    // Ha nincs ilyen felhasználó, akkor létrehozunk egy új felhasználót a megadott adatokkal.
    if (!user) {
      return User.create({ name: 'Tibor', email: 'hello@example.com' });
    }
    return user;
  })
  .then(user => {
    console.log(user);
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
