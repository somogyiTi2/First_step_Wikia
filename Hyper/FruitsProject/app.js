const mongoose= require('mongoose');
/*const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
*/
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});
/*azt kell megadni milyen URL-hez akarjuk csattolni + "/azadatbneve"*/

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Vannak adatok amelyeknek nicsenek nevei"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const furit = new Fruit ({
  name: "Apple",
  rating: 5,
  review:"Finom az alma."
});

const orange = new Fruit ({
  rating: 10,
  review:"Baranck"
})

/*így frissithetem az adatbázisom*/
//  Fruit.updateOne({
//    _id:61f051626720f4f4ebba6c13/*le kell deffiniálnom */
//   }, {name: "Peach"}/*így rakom bele magát amit hozzá akarok adni*/, function(err){
//        console.log(err);
//      }else{
//        console.log("Sikeresen frissítette")
//      }
//    })

/*
const orange = new Fruit ({
  name: "Orange",
  rating: 4,
  review:"narancs a narancs"
})

const banana = new Fruit ({
  name: "banana",
  rating: 9,
  review:"Hmmmm banán."
})

const kiwi = new Fruit ({
  name: "Kiwi",
  rating: 10,
  review:"Nagyon finom a Kiwi."
})
/*többet kell elmenteni ezért kell a many*/
/*Fruit.insertMany([kiwi, orange, banana, apple], function(err){
  if (err){
    console.log(err)
  }else{
    console.log("Sikeresen mentette a gyümiket a fruitsDB-be.")
  }
})*/
Fruit.find(function(err,fruits){
  if (err){
    console.log(err);
  } else {
    mongoose.connection.close();
    console.log(fruits);

    fruits.forEach(function(fuit){
      console.log(fruits.name );
    })
  }
})
/*így törlök adatot az adatbázisból*/
//Furit.deleteOne({name: "Peach"/*azonosítója*/}, function(err){
  //if(err){
    //console.log(err);
  //} else{
    //console.log("Sikeresen törölted")
  //}
//})*/
Person.deleteMany({name:"Joe"}, function(err){
  if(err){
    console.log(err);
  } else{
    console.log("Sikeresen törlötél mindent a dokumentumból.");
  }
})



//fruit.save();
/*kihívás*/
const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
  name: "Joe",
  age: 18
});

//person.save();
/*
const url= 'mongodb://localhost:27017';

const dbName = 'fruitDB';

const client = new MongoClient(url);


client.connect(function(err){
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  findDocuments(db, function(){
    client.close();
  });
});
*/

const insertDocuments = function(db, callback) {
  const collection = db.collection('fruits');

  collection.insertMany([
    {
      name: "Apple",
      score: 8,
      review: "Great Fruit"
    },
    {
      name: "Orange",
      score: 6,
      review: "Sweet & Sour"
    },
    {
      name: "Banana",
      score: 9,
      review: "Great Stuff"
    }
  ],function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
};

  const findDocuments = function(db, callback){

  const collection = db.collection('fruits');

  collection.find({}).toArray(function(err, fruits) {
    assert.equal(err, null);
    console.log("Found the following records");
    /*console.log("fruits");*/
    console.log(fruits);
    callback(fruits);
  });
}
