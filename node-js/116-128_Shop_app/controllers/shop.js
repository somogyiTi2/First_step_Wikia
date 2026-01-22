const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products',
    });
  });
};

exports.getProduct = (req, res, next) => {
  // /products/:productId -miatt
  const prodId = req.params.productId;
  console.log(prodId, 'id');
  //meghívom a models/Product.js-ben levo findById metódut
  Product.findById(prodId, product => {
    console.log(product);
    //res render ('file helye és neve', objektum)
    res.render('shop/product-detail', {
      title: product,
      product: product,
      pageTitle: 'All Products',
      path: '/products',
    });
  });
  // res.redirect('/');
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart',
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  console.log(prodId);
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });

  res.redirect('/cart');
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders',
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout',
  });
};
