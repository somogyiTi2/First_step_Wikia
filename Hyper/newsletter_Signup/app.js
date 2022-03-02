const express= require("express");
const bodyParser= require("body-parser");
const request= require("request");

const app =express();

app.use(express.static("public"));/*Ez azért kell mert különben a belső hiavatkozások nem jönnek be pl:Css*/
app.use(bodyParser.urlencoded({extended: true}));/*BELETENNI HOGY FOGADJA AZ ADATOT!!!*/
/*ki kell terjeszteni az URL-re*/

app.get("/", function(req,res){
  res.sendFile(__dirname+"/singup.html")
});
app.post("/", function(req,res){
  /*var*/const csnev= req.body.CsNev;
  /*var*/const knev=req.body.KNev;
  /*var*/const mail=req.body.Mail;
  const https= require("https");
  /*console.log(csnev,knev,mail);*/

  /*var*/const data= {
    members: [{ /*ezen a néven tudok változókat bevinni az online adatb-be*/
      email_address:mail,
      status:"subscribed",
      merge_fields: {
        FNAME:csnev,
        LNAME:knev,
      }
    }]
  };
  /*var*/const jsonData= JSON.stringify(data);
  /*ide kell majd küldenie*/

  const url="https://us5.api.mailchimp.com/3.0/lists/bf8f5582a6";

  const options={
    method:"POST",
    auth:"tibi97:d6cc457b452af5c19401ca37c05784e0-us5"
  }/*random szöveg: api id*/

  const request = https.request(url, options, function(response){

    if (response.statusCode===200){
      /*res.send("Sikeresen feliratkoztál");*/
      res.sendFile(__dirname+"/success.html");
    }else {
      /*res.send("Próbáld mégegyszer");*/
      res.sendFile(__dirname+"/failure.html");
    }

    response.on("data", function(data){/*elküldi data nevü filet */
      console.log(JSON.parse(data));/*és JSonben kiíja console ra*/
    })
  })

  request.write(jsonData);
  request.end();
  /*https.get(url,function())*/
})

app.post("/failure", function(req, res){
  res.redirect("/");
})

/*hogy online legyen a pricess.env.PORT-ot kell beírni de ha ez nem működik akkor
a 3000 porton fogja futtatni*/
app.listen(process.env.PORT || 3000, function(){
  console.log("A szerver a 3000 porton fut")
})


//API KEY
// d6cc457b452af5c19401ca37c05784e0-us5


//List KEY
//bf8f5582a6

/*Hyper: curl -X GET https://us5.api.mailchimp.com/3.0/lists --user "anystring:d6cc457b452af5c19401ca37c05784e0-us5"*/
/*d6cc457b452af5c19401ca37c05784e0-us5=API KEY*/
/*us5 felhasználó név*/
