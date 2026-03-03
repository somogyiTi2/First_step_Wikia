const Product = require('../models/product');
const Cart = require('../models/cart');

// Minden termék listázása a /products oldalhoz.
exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products',
      });
    })
    .catch(err => console.log(err));
};

// Egy termék megjelenítése elsődleges kulcs alapján.
exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findByPk(prodId)
    .then(product => {
      if (!product) {
        return res.redirect('/products');
      }
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products',
      });
    })
    .catch(err => console.log(err));
};

// Kezdőlap: ugyanazt a terméklistát mutatja.
exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
      });
    })
    .catch(err => console.log(err));
};

// Kosár nézet: a cart.json tartalmát összefésüli a DB-ben lévő termékadatokkal.
exports.getCart = (req, res, next) => {
  // console.log(req.user.cart);
  req.user
    .getCart()
    .then(cart => {
      // console.log(cart);
      return cart
        .getProducts()
        .then(products => {
          // console.log(products);
          res.render('shop/cart', {
            path: '/cart',
            pageTitle: 'Your Cart',
            products: products,
          });
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
  
};

// Egy termék hozzáadása a kosárhoz, majd visszairányítás.
exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByPk(prodId)
    .then(product => {
      if (product) {
        Cart.addProduct(prodId, product.price);
      }
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

// Termék eltávolítása a kosárból azonosító alapján, majd irányítás.
exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.destroy({ where: { id: prodId } })
    .then(product => {
      return product.destroy();
    })
    .then(() => {
      console.log('destroy product');
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
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
