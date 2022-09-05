var szam=1;
var kiiras=[];
function Hello(){

while(szam<=100){
  kiiras.push("MONDTAM HOGY NE!");
  szam++;
}
}
$("button").click(function(){
Hello();
$("h1").text(kiiras);
});
