
/*console.log(module);*/
/*module. egyedül is használható a exports kiírás*/
exports.getData = /*= getData;/*"Hello Word";*/

/*lényében elvesszük a funkció nevét és egy változót fogunk létrehozni
getData néven amelyet a névtelen funkcióhoz kötünk ha kivesszük a
"var getData"-át akkor a funkciónk egyben hozzátudjuk rendelni a
 modul.exports.getData-hoz.*/
/*var getData =*/ function (){/* getData(){/*ezt hozzáadom, hogy meghívható legyen*/
/*var*/ const ma = new Date(); //2021-12-27T12:41:15.634Z/*1 órával elöbb van*/
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
*/
/*var*/ const options={
  weekday: "long",
  day:"numeric",
  mounth:"long"
};

/*var*/ return day=ma.toLocaleDateString("hu-EU",options);/*en-US*/
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


  /*return day; /*adok neki visszatérési értéket*/
};

/*module.*/exports.getDay=/* getDay;*/

function () {/*getDay(){/*ezt hozzáadom, hogy meghívható legyen*/
/*var*/ const ma = new Date(); //2021-12-27T12:41:15.634Z/*1 órával elöbb van*/
/*var*/ const options={
  weekday: "long"
};

return day=ma.toLocaleDateString("hu-EU",options);/*en-US*/
/*  return day;*/
};
console.log(module.exports);
