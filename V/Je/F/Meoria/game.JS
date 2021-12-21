
var buttonColours=["red","blue","green","yellow"];

var gamePattern=[];



var userClickedPattern=[];

var lvl=0;
var started = false;

/*start gomb nyomás*/
$(document).keypress(function() {
  if(!started){
    $("h1").text("Level: "+lvl);
    nextSequence();
    started = true;
  }
});

/*Player gomb*/

/*Én módszerem
/*var gombok_szama = $(".btn").length;
for(var i=0;i<gombok_szama;i++){
$(".btn")[i].addEventListener("click",funsction(){alert("hello");});}
Egyszerűbben:*/

$(".btn").click(function() {
//2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
var userChosenColour = $(this).attr("id");
userClickedPattern.push(userChosenColour);

zene(userChosenColour) ;
animatePress(userChosenColour);
//2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
checkAnswer(userClickedPattern.length-1);
})


/*gép nyomás*/

function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  zene(randomChosenColour) ;

  animatePress(randomChosenColour);

  lvl++;
  $("h1").text("Level: "+lvl);
   userClickedPattern=[];
}
/*zene*/
function zene(name){
  $("#"+name).fadeOut(100)/*eltűnik*/.fadeIn(100)/*megjelenik*/;/*saját animáció*/
  var audio= new Audio("sounds/"+name+".mp3");
  audio.play();
}
/*animáció*/
function animatePress(currentColor/*ez azért szükséges, hogy csak ahhoz adja hozzá*/) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

/*csekkolás*/
function checkAnswer(currentLevel) {
    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      console.log("success");
      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
        nextSequence();
        }, 1000);//késlelteés
      }
    }
    else {

      console.log("wrong");

      /*zene
      var audio=new Audio("sounds/wrong.mp3")
      audio.play();*/
      zene("wrong");

      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");}, 200);

        $("h1").text("GAME OVER "+"Level: "+lvl);

        startOver();
      /*setTimeout(function(){
        $("h1").text("Game Over, Press Any Key to Restart");
        started=false;
        lvl=0;
        gamePattern=[];},1000);
      };
*//*$("h1").text("Game Over, Press Any Key to Restart");*/
    };

}
/*újrakezdés*/
function startOver() {
  lvl = 0;
  gamePattern = [];
  started = false;
}
