/*Script ellenözrő
document.querySelector("h1").innerText= "Hello";*/

/*document.querySelector("button").addEventListener("click",kattintas);
/*nem szabad kattintas() írni mert akkor azonnal meghívja a metódust*/
/*function kattintas(){
  alert("Siker");
}*/
/*Rövidebben megírhatjuk így is*//*
document.querySelector("button").addEventListener("click",function (){
  alert("Siker");
});
*/

/*Saját helytakarékatlan megoldás
document.querySelectorAll("button")[1].addEventListener("click",function (){
  alert("a");
});document.querySelectorAll("button")[2].addEventListener("click",function (){
  alert("s");});document.querySelectorAll("button")[3].addEventListener("click",function (){
  alert("d");});document.querySelectorAll("button")[4].addEventListener("click",function (){
  alert("j");});document.querySelectorAll("button")[5].addEventListener("click",function (){
  alert("k");});document.querySelectorAll("button")[6].addEventListener("click",function (){
  alert("l");});*//*for(var i=0; i<document.querySelectorAll(".drum")/*("button")ezzel az a baj, ha +
gomobot adok hozzá akkor arra is vonatkozik.*//*.length /*megnézzük hány elleme van*//*){};*/
/*egyszerűbb ha kiszervezzük új változóba a számot*/

/*******érzékeli a gombnyomást***************/
var gombok_szama = document.querySelectorAll(".drum").length;

for(var i=0;i<gombok_szama;i++) {
  document.querySelectorAll(".drum")/*kiragadjuk a .drum osztálosokat*/
  [i].addEventListener("click",function (){
    /*var audio = new Audio("sounds/tom-1.mp3");
    audio.play();*/
    /*console.log(this.innerHTML);*/
    /*meghatározza melyik gombot nyomtam meg a this*/
    /*innerHTML csak a színt írja ki*/

    /*this.style.color="white";*/
    /*ezzel fehérre szinezem a gomb szövegét amit megnyomok.*/

    var buttonInnerHTML= this.innerHTML;
    Hangcsinálo(buttonInnerHTML);
/*
    switch /*kulcsszó*(buttonInnerHTML)/*triger* {
      case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
        break;
        case"a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
        break;

        case"s":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
        break;

        case"d":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
        break;

        case"j":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
        break;

        case"k":
          var kb = new Audio("sounds/kick-bass.mp3");
          kb.play();
        break;

        case"l":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
        break;

      default:/*lefedi azt ami nincs benne
        console.log(buttonInnerHTML)
    }*/
    gombanimacio(buttonInnerHTML);
  });
};

/**********************érzékeli billenytű nyomást ************************************************/
/*!keydown helyett keypress!*/
document.addEventListener("keypress", function(eztnyomod/*paraméter*/){
/*alert("lenyomtad")*/
/*console.log(eztnyomod);//isTrusted: true, key: 's', code: 'KeyS', location: 0, ctrlKey: false, …*/
  Hangcsinálo(eztnyomod.key);
  gombanimacio(eztnyomod.key);
  });
/*hangcsináló modul**********************************/
function Hangcsinálo(key/*gomb kódja*/){
  switch /*kulcsszó*/(key)/*triger*/ {
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
      break;
      case"a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
      break;

      case"s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
      break;

      case"d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      break;

      case"j":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
      break;

      case"k":
        var kb = new Audio("sounds/kick-bass.mp3");
        kb.play();
      break;

      case"l":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
      break;

    default:/*lefedi azt ami nincs benne*/
      console.log(key)
  }
};
/************************gomb animáció***********************/
function gombanimacio(currentKey){
/*  console.log("Hello");*/
  document.querySelector("."+currentKey).classList.add("megbok");
/*set timeout function*/
setTimeout(function(){ document.querySelector("."+currentKey).classList.remove("megbok"); }, 100);
};
