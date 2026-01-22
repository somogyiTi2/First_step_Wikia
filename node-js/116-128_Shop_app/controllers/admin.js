const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  //res.render('az itteni filt', objektum )
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null, title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};
exports.getEditProduct = (req, res, next) => {
  // a query param edit paraméter
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    if (!product) {
      return res.redirect('/');
    }
    console.log(product);
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/add-product',
      editing: editMode,
      product: product,
    });
  });
  //res.render('az itteni filt', objektum )
};

exports.postEditProduct = (req, res, next) => {
  const postId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  const updatedProduct = new Product(updatedTitle, updatedImageUrl, updatedDesc, updatedPrice, postId);
  updatedProduct.save();
  res.redirect('/admin/products');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products',
    });
  });
};
