const express= require("express");
const https= require("https");/*kell hogy leszedhesse az API-val az adatokat*/
const bodyParser=require("body-parser");/*telepíteni kell a padi-parsert*/

const app = express();
app.use(bodyParser.urlencoded({extended: true}));/*body-parsehez tartozik*/

app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html");
});
app.post("/", function(req,res){
  /*console.log(req.body.cityName);*/
  /*console.log("Megkaptuk az üzeneted");*/
  const query=req.body.cityName;
  const apik="f44f0bb7584b486f840deda4ab600ca9"
  const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apik+"&units=metric";

  https.get(url, function(response){
    console.log(response.statusCode);
    response.on("data", function(data) /*16 számrednserbe írja ki*/{
      const idoj= JSON.parse(data);/*JSON datává alakítja*/
      console.log(idoj);
      const obj={
        name:"Tibi",
        kedvenckaja: "pizza"
      }
    /*megszoritjuk az objektumot*/
    console.log(JSON.stringify(obj))/*szövegfajtályú (lapos lesz)*/
    const temp= idoj.main.temp /*lényegében a elözőleg ledeffiniált idoj-ben amiben jsonná alakítottam magát a filt
    lényegében a main nevezetű részéből szeretném kiemelni a temp-et.*/
    console.log(temp);
    /*lényegében atelepített "JSON View pro" Ch.alkalmazáassal tudom is másolni a megadott adatokat*/
    const egbolt= idoj.weather[0].description;
    console.log(egbolt);
    const icon = idoj.weather[0].icon;
    const immagesURL="http://openweathermap.org/img/wn/"+icon+"@2x.png";
      res.write("<p>Az eg pedig "+egbolt+"</p>");
      res.write("<h1> "+query+"ennyi fok van "+temp +" °C </h1>");
      res.write("<img src="+immagesURL+"></img>");
      res.send();
    /*  res.send("Mögy a szerver");*/
})/*res.send("Mögy a szerver");/*csak egy res.send lehet*/
});
})


app.listen(3000, function(){
  console.log("Megyek");
});

//API KEY
// d6cc457b452af5c19401ca37c05784e0-us5


//List KEY
//bf8f5582a6

/*Hyper: curl -X GET https://us5.api.mailchimp.com/3.0/lists --user "anystring:d6cc457b452af5c19401ca37c05784e0-us5"*/
/*d6cc457b452af5c19401ca37c05784e0-us5=API KEY*/
/*us5 felhasználó név*/
