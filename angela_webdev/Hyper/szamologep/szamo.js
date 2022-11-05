const express= require("express");
const bodyParser = require("body-parser");/*deffiniálni kell amit használok */

const app= express();
/*a body parser expressel működik? */
app.use(bodyParser.urlencoded({extended: true /* kiterjesztett opció*/ }));/*sok fajtája van, ahogy fel lehet használni a bodyParser et
pl .text() .json() /*ami egy sperc java formátunm*//*urlencoded és ezt használjuk ürlapról.*/



app.get("/", function(req, res){
  /*res.send("Hello Word");*/
  console.log(__dirname);/*a __ vonal adja meg az akutális mappa nevét*/
  /*kiírja most, hol is van*/
  res.sendFile(__dirname + "/index.html");
});


app.post("/", function(req, res){

var num1= Number(req.body.num1);/*szövegként érkezik*/
var num2= Number(req.body.num2);/*A Number()-el tudjuk számmá alakítani*/
var eredmeny= num1 + num2;

  res.send("Az eredmény: "+eredmeny)
  /*console.log(req.body.num1);/*ez az utolsó állapota a req-nak*/
/*kiírja az num1 es számot*/

/*  res.send("Köszi megkaptam")*/
});

app.listen(3000, function(){
  console.log("Megyek");
});
