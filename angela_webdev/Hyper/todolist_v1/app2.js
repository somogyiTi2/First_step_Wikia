const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));/*BELETENNI HOGY FOGADJA AZ ADATOT!!!*/

app.set('view engine', 'ejs'); /*set helyzett USE*/

app.get("/", function(req, res) {

  var ma = new Date(); //2021-12-27T12:41:15.634Z/*1 órával elöbb van*/
  var hetnap = ma.getDay(); //1
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

  var options={
    weekday: "long",
    day:"numeric",
    mounth:"long"
  };

  var day=ma.toLocaleDateString("hu-EU",options);/*en-US*/
  console.log(day);

  if ( /*ma.getDay()*/ hetnap === 6 || ma.getDay() === 0) /*mivel szombat 6 vasárnap 0*/ {
    nap = "hétvége";
    /*res.write("<h1>Hurrá itt a hétvége</h1>");*/
  } else {
    nap = "hétköznap";
    /*res.sendFile(__dirname+"/index.html");*/
    /*res.write("<h1>Dogozzá</h1>");
    res.write("<h1>nem ezé fizetlek</h1>");
    res.write("<h1>Na csináljá valamit</h1>");
    res.send();*/
  }
  res.render("list", {
    vminap: nap,
    hkscpzv: hv,
    vminap1: day,
    ujlistaelem:belem
  });
  /*app.render(nézet, [helyiek], visszahívás)*/


})
/*mikor a lekérdezés elindul elmegy elsőnek a app.post-ba
Ami a res.rendirect-el fogja küldeni HOME.get-be*/
app.post("/", function(req,res){
  var belem= req.body.Uelem;
  console.log(belem);
  res.rendirect("/");
});

app.listen(3000, function() {
  console.log("A szerver a 3000 porotn van")
})
