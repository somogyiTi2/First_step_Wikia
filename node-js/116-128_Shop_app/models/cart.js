const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');

module.exports = class Cart {
  // constructor-ral inicializációra való
  //   constructor() {
  //     this.products = [];
  //     this.totalPrice = 0;
  //   }
  static addProduct(id, productPrice) {
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };

      if (!err && fileContent.length > 0) {
        cart = JSON.parse(fileContent);
      }

      const existingProductIndex = cart.products.findIndex(prod => prod.id === id);

      let updatedProduct;

      if (existingProductIndex >= 0) {
        updatedProduct = { ...cart.products[existingProductIndex] };
        updatedProduct.qty += 1;

        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id, qty: 1 };
        cart.products.push(updatedProduct);
      }

      cart.totalPrice += Number(productPrice);

      fs.writeFile(p, JSON.stringify(cart, null, 2), err => {
        if (err) {
          console.error(err);
        }
      });
    });
  }

  
  addProduct(product) {
    this.products.push(product);
    this.totalPrice += product.price;
  }

  getProducts() {
    return this.products;
  }
};
