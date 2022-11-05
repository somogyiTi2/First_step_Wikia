const /*konstans*/ express= require/*kérdések*/("express");

const app= express();

app.get("/"/*az első paraméter*//*"/" a home paget jelentik*/,function(req/*kérdés evt is szoktak heylyette írni vagy req*/, res/*válasz vagy res*/){
  /*console.log(request);*/
  res.send("<h1>Hello Word</h1>");
});
/*az express által bizotsítja, hogy meghatározza mi történjen*/

app.get("/conact",function(req, res){
  res.send("conact:somogyi.tibor1997@gmail.com");
});

app.get("/about",function(req, res){
  res.send("Szia Tibi vagyok ezt én írtam");
});


app.listen(3000,/*3000 protra figyeljen*//*ha + funkicó kell akkor ,*/ function(){
  console.log("A szerver elindult a 3000 es porton");
});
