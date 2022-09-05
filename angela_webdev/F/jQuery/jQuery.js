/*$("h1").css("color","green"); /*az összes H1 css-sét állítsa színét priosra*/
/*ez így nem működik mert*/
/*kísérlet*/
/*setTimeout(function(){
  $("h1").addClass("nagybetu margin-50")},
   2000);
   /*kísérlet*/
$("h1").addClass("nagybetu margin-50");
/*így kérdezek le benne van -e ebbe az osztályba?*/
console.log ($("h1").hasClass("nagybetu margin-50"));
$("h1").text("Szöveg váltás");/*így tudom megváltoztatni a szöveget*/
/*$("h1").remove("nagybetu"),200*/

$("button").css("background-color","yellow");
$("button").text("Ne nyomd meg");/*szövegcsere*/
$("button").html("<em>OK</em>")/*html be kicseréli*/
/*<-így állítom be; így kérdezem le->*/
console.log ($("h1").css("color"));/*kiírja milyen színű így tudok lekérdezni*/

console.log($("img").attr(("src")));/*kiírja, honann jön a kép*/

$("a").attr("href","https://www.youtube.com/watch?v=5qap5aO4i9A");
/*kicseréli magát a linket*/
console.log($("h1").attr("class"));
/*kiírja milyen osztályokba van*/

/*action lissener*/
/*$("h1").click( function(){
$("h1").css("color", "purple");
});*/

for (var i = 0; i < 5; i++) {
  document.querySelectorAll("button")[i].addEventListener("click",function()
  {  document.querySelector("h1").style.color="purple";})};
/*= Ez itt ugyan az felette és alatta*/
$("button").click(function(){
  $("h1").css("color","purple")
});

/*
$("input").keypress(function(event){
  console.log(event.key);
})*/

$(document).keypress(function(event){
  console.log(event.key);
})

$(document).keypress(function(event){
  $("h1").text(event.key);
})

$("h1").on("mouseover", function(){
   $("h1").css("color","yellow");
});

$("h1").on("click", function(){
   $("h1").css("color","black");
});

/*új gomb létrehozása:
ez elé vagy utánna teszi h1 nek
$("h1").before("<button>új </button>");
$("h1").after("<button>új </button>");
Ez BELE teszi a h1 be
$("h1").prepend("<button>új </button>");
$("h1").apend("<button>új </button>");

így pedig eltüntethetem az összeset:
$("button").remove();

h1 elrejtése*/
/*elöjön elrejtődik
$("button").on("click", function(){
  $("h1").toggle();
});*/
/*ELFELEJT*//*
$("button").on("click", function(){
  $("h1").fadeToggle();
});*/

/*csúszik*//*
$("button").on("click", function(){
  $("h1").slideToggle();
});*/
/*félig átlátszodosás*/
$("button").on("click", function(){
  /*$("h1").animate({opacity: 0.5});*/
  $("h1").animate({margin: 20});
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
  /*$("h1").animate({margin: "20%});*/
});

$("img").on("mouseover", function(){
  $("img").animate({margin:"50%",height: 500});
  $("img").animate({margin:"0%",height: 50});
});
