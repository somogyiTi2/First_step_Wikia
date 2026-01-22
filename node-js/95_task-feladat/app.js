const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');

const usersRoutes = require('./routes/users');
const homeRoutes = require('./routes/home');

const app = express();

// VIEW ENGINE
app.set('view engine', 'ejs');
app.set('views', 'views');

// BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));

// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.use(homeRoutes.router);
app.use(usersRoutes.router);

// DEBUG MIDDLEWARE
app.use((req, res, next) => {
  console.log('Middleware executed');
  next();
});

// 404
app.use((req, res, next) => {
  console.log('error 404');
  res.status(404).send('<h1>Page not found</h1>');
});

//server létrehozása
const server = http.createServer(app);
server.listen(3000);

console.log('Server is running on http://localhost:3000');
