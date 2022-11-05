const express = require("express");
const bodyParser = require("body-parser");
const data= require(__dirname + "/data.js");/*hozzáadom data js-t ami a napot írja ki*/

/*console.log(data());/*kiratom milyen adatokat kap vissza app.js -ből.*/

const app = express();

/*let*/ const belemek=["Edz", "Kódolj", "Dolgozz"];
/*let*/ const  workitems=[];
/*a let és a var közt a zone külömség, hogy a var mindenhova a let csak a metodusba. A const pedig nem változhat*/
/*azért lehet const mert lényegében új elemenet adhatok hozzá de a teljes tömböt nem cserélhetem le */

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));/*BELETENNI HOGY FOGADJA AZ ADATOT!!!*/
app.use(express.static("public"));/*ez azért kell hogy a public mappábnan elérje a css-t a filunk.*/

app.get("/", function(req, res) {
/* data.js-be áthelyezve*/
  /*
    var ma = new Date(); //2021-12-27T12:41:15.634Z/*1 órával elöbb van* /
    /*var hetnap = ma.getDay(); //1
    var nap = "";
    var hv = "";
    switch (hetnap) {
      case 0:
        hv = "vasárnap";
        break;
      case 1:
        hv = "hétfő";
        break;
      case 2:
        hv = "kedd";
        break;
      case 3:
        hv = "szerda";
        break;
      case 4:
        hv = "csütörtök";
        break;
      case 5:
        hv = "péntek";
        break;
      case 6:
        hv = "szombat";
        break;
        defult:
        console.log("Ma"+ +"van...");
      hv = "Sohanapja kis kedd"
    }
  * /
    var options={
      weekday: "long",
      day:"numeric",
      mounth:"long"
    };

    var day=ma.toLocaleDateString("hu-EU",options);/*en-US* /
    /*console.log(day);* /
      if ( /*ma.getDay()* / hetnap === 6 || ma.getDay() === 0) /*mivel szombat 6 vasárnap 0* / {
        nap = "hétvége";
        /*res.write("<h1>Hurrá itt a hétvége</h1>");* /
      } else {
        nap = "hétköznap";
        /*res.sendFile(__dirname+"/index.html");* /
        /*res.write("<h1>Dogozzá</h1>");
        res.write("<h1>nem ezé fizetlek</h1>");
        res.write("<h1>Na csináljá valamit</h1>");
        res.send();* /
}*/
 /*let*/ const day=data.getData();/*ledefiniájuk, hogy data file ha lefut akkor day néven legyen a visszadott day nevű változója*/
/*getDay a pont után ha azt akarjuk, hogy a másik obejktumban fusson a másik fügvény.*/
  res.render("list", {
    vminap: day,
    /*hkscpzv: hv,
    vminap1: day,*/
    ujlistaelemek: belemek
  });
  /*app.render(nézet, [helyiek], visszahívás)*/
});

app.get("/work", function(req, res) {
  res.render("list",{vminap:"Munka",ujlistaelemek:workitems})
})

app.get("/about",function(req, res){
  res.render("about"); /*oldal meghívása*/
})

/*Mikor a lekérdezés elindul elmegy elsőnek a app.post-ba
Ami a res.rendirect-el fogja küldeni HOME.get-be*/
app.post("/", function(req, res){
  /*  console.log(req.body);*/

    let belem= req.body.Uelem;

    if(req.body.list==="Munka"){

      workitems.push(belem);
      res.redirect("/work");
      console.log("Siker");

    }else{
      belemek.push(belem);
      res.redirect("/");
    }

  console.log(belem);



});

app.post("/work",function(req, res){

  let belem= req.body.Uelem;
  workitems.push(belem);
  res.redirect("/work")
})



app.listen(3000, function() {
  console.log("A szerver a 3000 porotn van")
})
