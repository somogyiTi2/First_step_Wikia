const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

// const products = [];
exports.postAddProduct = (req, res, next) => {
  //így kerül a modellbe az új termék
  //Product osztályt, létrehozok egy új példányt, majd meghívom a save metódust
  const product = new Product(req.body.title);
  product.save();
  //   products.push({ title: req.body.title });
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  // ❌ HIBA VOLT:
  // product nevű változóba mentetted el az összes terméket,
  // de lent products-ként próbáltad használni (ami nem létezett)
  // const product = Product.fetchAll();

  // ✅ JAVÍTÁS:
  // Több elemről van szó, ezért többes szám
  // const products = Product.fetchAll();
  //itt a product.js -be tesszük a fetchAllt cb callback függvénnyel
  Product.fetchAll(products => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
