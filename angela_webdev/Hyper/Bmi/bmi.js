/*integráció*/
const express= require("express");
const bodyParser= require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));

/*oldalak*/
app.get("/",function(req, res){
  res.sendFile(__dirname + "/BmiCalculator.html");
})
/*logika*/
/*bekérő rész*/
app.post("/", function(req, res){
var num1= PareFloat(req.body.s);
var num2= PareFloat(req.body.m);/*lebegőpontos számmá alakítja*/
/*logika*/
var bmi= Math.round(num1/(num2*num2));
var elteres= 20-bmi;
res.send("BMI: "+bmi+" Ennyit kellene változnod: "+elteres
+" A jelnlegi súlyod "+num1+" A jelnlegi magasságod "+num2);
});


/*listener*/
app.listen(3000, function(){
  console.log("Megyek");
});
