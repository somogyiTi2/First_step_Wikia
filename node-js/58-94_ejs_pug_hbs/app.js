const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressHbs = require('express-handlebars');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'ejs');

//ezzel a handlebars-t használom view engine-nek //89. lecke
// app.engine('handlebars', expressHbs());
// app.set('view engine', 'handlebars');
// vagy hbs-nek is rövidíthetem de akkor a filok is nem 404.handlebars lesz hanem .hbs
// app.engine(
//   'hbs',
//   expressHbs({
//     layoutsDir: 'views/layouts',
//     default: 'main',
//     extname: 'hbs',
//   })
// );
// app.set('view engine', 'hbs');

//globálisn beállítom a view engine-t és a views mappát
// app.set('view engine', 'pug');

//view default könyvtár a views mappa
app.set('views', 'views');

// 1️⃣ BODY PARSER
//így tudom ncodode-olni a body-t hogy megkapja a formot
app.use(bodyParser.urlencoded({ extended: false }));

// 2️⃣ STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

// 3️⃣ ROUTES
// Ha adminnal kezdődik pl: /admin/add-product akkor az adminRoutes-t használja
// app.use('/admin', adminRoutes);
// app.use('/admin', adminRoutes.routes);
app.use('/admin', adminData.routes);
app.use(shopRoutes);

// // // // ÁTHELYZEVE A routes/admin.js-be
//ezt feljebb írom mert a fentről lefele halad az olvasás
// // // app.use('/add-product', (req, res, next) => {
// // //   console.log('/add-product');
// // //   res.send(
// // //     '<html><h1>add-product</h1> <form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form></html>'
// // //   );
// // // });

// // // // app.use('/product', (req, res, next) => {
// // // //   console.log('/product');
// // // //   console.log(req.body);
// // // //   res.redirect('/');
// // // // });

// // // //így határozom meg a metódust ha csak app.use-van akkor mindenre reagál
// // // app.post('/product', (req, res, next) => {
// // //   console.log('/product POST');
// // //   console.log(req.body);
// // //   res.redirect('/');
// // // });

// // // //ha rákeresek az oldalra ez jön be: localhost:3000/product
// // // app.get('/product', (req, res, next) => {
// // //   console.log('/product GET');
// // //   res.send('<h1>Product GET</h1>');
// // // });

//"/" ami ezzel kezdődik itt ezt feljebb írom mert a fentről lefele halad az olvasás

// // //ÁTHELYEZVE A routes/shop.js-be
// // // app.use('/', (req, res, next) => {
// // //   console.log('/');
// // //   res.send('<h1>Any other page</h1>');
// // // });

//arogmnetikus fügény így csinálok egy middleware-t
//a midelware jelentése: egy olyan függvény, amely hozzáfér a kérés (req) objektumhoz, a válasz (res) objektumhoz, és a következő middleware függvényhez (next) az alkalmazás kérés-válasz ciklusában.
// A middleware-eket gyakran használják feladatok elvégzésére, mint például hitelesítés, naplózás, vagy a kérés adatainak feldolgozása, mielőtt azok elérnék a végpontokat vagy útvonalakat.

app.use((req, res, next) => {
  console.log('Middleware executed');
  next();
}); //csak az első számít, amíg nem illesztem be a next()-et

// 4️⃣ 404 PAGE NOT FOUND
app.use((req, res, next) => {
  console.log('hello');
  res.status(404).render('error-404', { docTitle: 'Page Not Found' });
  // res.status(404).sendFile(path.join(__dirname, 'views', 'error-404.html'));
  //   res.status(404).send('<h1>Page not found</h1>');
  //nem küldhetek headet de a bodyvá alakítja a rsima res.send()-et
  //   res.send('<h1>Hello from Express!</h1>');
});

const server = http.createServer(app);

server.listen(3000);
