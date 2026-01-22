//ez olyasmi mint a redux (a modell)
// const products = [];
const fs = require('fs');
const { get } = require('http');
const path = require('path');

const getProductsFromFile = cb => {
  const filePath = path.join(__dirname, '..', 'data', 'products.json');
  fs.readFile(filePath, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    // products.push(this);
    //ezel tároljuk el a productokat fájlba
    //a __dirname a util-ból jön
    //module.exports = path.dirname(process.mainModule.filename);

    // ❌ HIBA VOLT: const path = path.join(...)
    // ✅ JAVÍTÁS: ne árnyékold a path modult
    // const filePath = path.join(__dirname, '..', 'data', 'products.json');
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(
        path.join(__dirname, '..', 'data', 'products.json'),
        JSON.stringify(products),
        err => {
          console.log(err);
        }
      );
    });

    //ezzel tudom megnyitni a fájlt
    // fs.readFile(filePath, (err, fileContent) => {
    //   // let products = [];
    //   // if (!err) {
    //   //   //ha nincs hiba, akkor a fájl tartalmát átalakítom js objektummá
    //   //   products = JSON.parse(fileContent);
    //   // }
    //   // //hozzáadom az új productot a products tömbhöz
    //   // products.push(this);

    //   // //visszaírom a fájlba a products tömböt
    //   // fs.writeFile(filePath, JSON.stringify(products), err => {
    //   //   console.log(err);
    //   // });
    // });
  }

  //static jelentése: nem egy adott példányhoz tartozik, hanem az osztályhoz magához
  //cb callback függvény
  static fetchAll(cb) {
    //Áttettem a getProductsFromFile függvénybe
    getProductsFromFile(cb);
    // const filePath = path.join(__dirname, '..', 'data', 'products.json');
    // fs.readFile(filePath, (err, fileContent) => {
    //   if (err) {
    //     cb([]);
    //     // return [];
    //   }
    //   // return JSON.parse(fileContent);
    //   cb(JSON.parse(fileContent));
    // });
  }
};
