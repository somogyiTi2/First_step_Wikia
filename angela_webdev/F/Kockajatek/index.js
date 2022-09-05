var randomNumber1=Math.floor(Math.random()*6)+1;

var kep1neve= "dice"+randomNumber1+".png";

var kep1valszto= "img/"+kep1neve;

document.querySelector("img, img1").setAttribute("src", kep1valszto);

var randomNumber2=Math.floor(Math.random()*6)+1;

var kep2neve= "dice"+randomNumber2+".png";

var kep2valszto= "img/"+kep2neve;

document.querySelectorAll("img")[1].setAttribute("src", kep2valszto);

if (randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="🏆Egyenlő🏆";
}else if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🥇Első nyert";
}else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Második nyert🥈";
}
