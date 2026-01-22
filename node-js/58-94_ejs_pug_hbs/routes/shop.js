const express = require('express');
const router = express.Router();
const path = require('path');
//az adminból így húzom át az adatokat.
const adminData = require('./admin');

router.get('/', (req, res, next) => {
  console.log('/');
  //az adminból így húzom át az adatokat.
  console.log(adminData.products, 'shop.js');

  //ide hivatkozom a products tömböt
  const products = adminData.products;
  //így kell meghívni a pug template-et
  //has products: products.length > 0 ? true : false ez a hbs-hez kell
  res.render('shop', {
    prods: products,
    docTitle: 'Shop',
    path: '/admin/add-product',
    hasProducts: products.length > 0 ? true : false,
    activeShow: true,
    productsCSS: true,
    // layout:true
  });
  //nem fog működini a ./views/shop.html mert nem tudja hol van az app.js-hez képest
  //ezért kell a path modult használni
  // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
  //   res.send('<h1>Any other page</h1>');
});

module.exports = router;
