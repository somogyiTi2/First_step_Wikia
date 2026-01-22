const express = require('express');
//ez egy kis express app amivel ki exportálhatom
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');

router.use('/add-product', (req, res, next) => {
  console.log('/add-product');
  //   res.send(
  //     '<html><h1>add-product</h1> <form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form></html>'
  //   );
  res.render('add-product', { docTitle: 'Add Product', path: '/admin/add-product', activeShow: true, });

  //   res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
  // Szebben így a rootDir változóval (util-ben helyztem el )
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// app.use('/product', (req, res, next) => {
//   console.log('/product');
//   console.log(req.body);
//   res.redirect('/');
// });

const products = [];

//ha rákeresek az oldalra ez jön be: localhost:3000/product
router.get('/product', (req, res, next) => {
  console.log('/product GET');
  // res.send('<h1>Product GET</h1>');
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

});

//így határozom meg a metódust ha csak app.use-van akkor mindenre reagál
router.post('/product', (req, res, next) => {
  products.push({ title: req.body.title });
  console.log('/product POST', req.body.title);
  console.log(req.body);
  res.redirect('/');
});

// module.exports = router;

// ha ki akrom exportálni a productsot akkor:
exports.routes = router;
exports.products = products;
