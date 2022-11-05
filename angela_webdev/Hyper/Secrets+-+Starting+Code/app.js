require('dotenv').config()

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
/*const encypt = require("mongoose-encryption")*/
/*const md5 = require("md5");*//*
const bcrypt = require("bcrypt");
const saltRounds = 10;*/
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');

const app = express();

console.log(process.env.API_KEY);

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(session({
  secret:"Egy kis titok.",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser:true});
/*mongoose.set("useCreateIndex", true); Elvileg javítja a kodot?*/

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  googleId: String,
  secret: String
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

/*const secret = "Ezittegyksititokakisérletezéskedvéért." Ki kell vágni mert ezt .env-vel titkosítjuk*/
/*userSchema.plugin(encypt,{ secret: process.env.SECRET, encyptedFields:["password"] });*/

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

//ANZS
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
/* Nem működik tőle a google bejelentkezés*
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());/*PROBLEM?!*/

//Google ID

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"//MarshallOfSound
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);

    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get("/", function(req, res){
  res.render("home");
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ["profile"] })
);

app.get("/auth/google/secrets",
  passport.authenticate('google', { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect secrets.
    res.redirect("/secrets");
  });

app.get("/login", function(req, res){
  res.render("login");
});

app.get("/register", function(req, res){
  res.render("register");
});


//ANZS
app.get("/secrets", function(req, res){
  User.find({"secret": {$ne: null}}, function(err, foundUsers){
    if (err){
      console.log(err);
    } else {
      if (foundUsers) {
        res.render("secrets", {usersWithSecrets: foundUsers});
      }
    }
  });
});
/*
app.get("/secrets", function(req, res){
  if (req.isAuthenticated()){
    res.render("secrets")
  } else {
    res.redirect("/login")
  }
});
*/

app.get("/submit", function(req, res){
  if (req.isAuthenticated()){
    res.render("submit")
  } else {
    res.redirect("/login")
  }
});


app.post("/submit", function(req, res){
  const submittedSecret = req.body.secret;

//Once the user is authenticated and their session gets saved, their user details are saved to req.user.
  // console.log(req.user.id);

  User.findById(req.user.id, function(err, foundUser){
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        foundUser.secret = submittedSecret;
        foundUser.save(function(){
          res.redirect("/secrets");
        });
      }
    }
  });
});



app.get("/logout", function(req, res){
  req.logout();
  res.redirect("/");
})

app.post("/register", function(req, res){
/*
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
      // Store hash in your password DB.
      const newUser= new User({
        email: req.body.username,
        password: hash /*md5(req.body.password)* /
      });

      newUser.save(function(err){
        if(err){
          console.log(err);
        }else {
          res.render("secrets");
        }
      })
  });
  */
  User.register({username: req.body.username}, req.body.password, function(err, user){
    if (err){
      console.log(err);
      res.render("/register");
    } else {
      passport.authenticate("local")(req, res, function(){
        res.redirect("/secrets")
      });
    }
  })
});

app.post("/login", function(req, res){
/*  const username = req.body.username;
  const password = req.body.password /*md5(req.body.password)* /;

  User.findOne({email: username}, function(err, foundUser){
    if(err){
      console.log(err);
    } else {
      if (foundUser){
        bcrypt.compare(password, foundUser.password, function(err, result) {
            // result == true
            if (result === true){
              res.render("secrets");
              }
        });
      /*  }* /
      }
    }
  })*/
  const user = new User({
    username: req.body.username,
    password: req.body.password
  })
  req.login(user, function(err){
    if(err){
      console.log(err);
    }else{
      passport.authenticate("local")(req, res, function(){
        res.redirect("/secrets")
      });
    }
  })
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
