//node init
//indítás nodemon server.js

const express = require("express");
//npm i express
const app = express();

const https = require("https");

const bodyParse = require('body-parser');
const { subscribe } = require("diagnostics_channel");
app.use(bodyParse.urlencoded({ extended: true }));
//ezen a modon tudok adatokat befognai az oldalról

app.get("/", (req, res) => {
  res.send("<h1>hello</h1>");
  //így posztolok ki bármit
});

app.get("/contect", (req, res) => {
  res.send('contect oldal')
})

app.get("/calculator", (req, res) => {
  console.log(__dirname);
  //így lehet megállapítani hol is van a file
  res.sendFile(__dirname + '/calculator.html');
  //filokat így postolok
});
//AMENNYIBEN POSTOLÁS TÖRTÉNIK =>
app.post("/calculator", (req, res) => {
  // res.send("<h1>Kösz csá</h1>");
  console.log(req.body.num1);
  const first = Number(req.body.num1)
  const secund = Number(req.body.num2)
  let sum = first + secund
  res.send(first + "+" + secund + "=" + sum);
});


app.get("/BMI", (req, res) => {
  res.sendFile(__dirname + '/BMI.html')
});

app.post("/BMI", (req, res) => {
  console.log(req.body.num1);
  const weight = Number(req.body.weight)
  const height = Number(req.body.height)
  let bmi = weight / (height * height);
  res.send('A BMI-d szerint te' + Math.floor(bmi))
});


app.get('/api-weather', (req, res) => {
  res.sendFile(__dirname + '/weather.html')
});


app.post('/api-weather', (req, res) => {
  const city = req.body.cityName;
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=f44f0bb7584b486f840deda4ab600ca9';

  https.get(url, (response) => {
    // console.log(res);//ezzel lehet a bejövő adatokat kiíratni
    console.log(response.statusCode);
    response.on('data', (data) => {//adatok leszűrése és kiolvasása
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const watherDescription = weatherData.weather[0].description;
      let weatherpic = "img";
      if (watherDescription === 'clear sky') {
        weatherpic = "☁️"
      } else if (watherDescription === 'sunny') {
        weatherpic = "☀️"
      }
      res.send('<h1>ILYEN AZ IDŐ:' + weatherpic + '</h1><p>' + watherDescription + '</p>');
      // res.write('<p>jelenleg ilyen az idő: '+watherDescription+'<p>')//így több dolgot lehet kiírni
      // res.write('<p>'+weatherpic+'<p>')//bajok az ékezettel...
      // res.send()
    });
  });
})

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
})

app.post('/login', (req, res) => {
  const firstname = req.body.fname;
  const lastname = req.body.lname;
  const email = req.body.email;
  console.log(firstname + " " + lastname + " " + email);

  const data = {
    members: {
      email_address: email,
      status: 'subscribe',
      merge_fields: {
        FNAME: firstname,
        LNAME: lastname
      }
    }
  };

  const jsonData = JSON.stringify(data);
  console.log(jsonData);

  const url = "https://eact-http-70f07-default-rtdb.firebaseio.com/nodelogin.json";

  const options = {
    method: 'POST',
    /* ha van password akkor ide... */
  };

 
  /*postoló metodus*/
  const request = https.request(url, options, (response) => {
    if (response.statusCode === 200){
      // res.send("Successfully subscibed!");
      res.sendFile(__dirname+'/succses.html')
    }else{
      // res.send('please try later.');
      res.sendFile(__dirname+'/fail.html');
    }
    response.on('data', (d) => {
      console.log(JSON.parse(d));
    });
  });

  app.post('/fail',(req,res)=>{
    res.redirect("/login")//ezzel meg tudom hívni, hogy az elöző oldalra menjen vissza
  })


  request.write(jsonData);
  request.end();
});



//ha feltöltöm a heurékára:
// app.listen(procress.env.PORT || 3000, () => { console.log("I'm run") });//226
app.listen( 3000, () => { console.log("I'm run") });