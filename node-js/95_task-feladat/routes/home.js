const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
  console.log('/');
   res.render('home', {docTitle: 'Home', path: '/'});
  // res.sendFile(path.join(__dirname, '..', 'views', 'home.html'));
});

const users = [];
router.post('/', (req, res, next) => {
  const username = req.body.username;
  console.log(username);
  users.push(username);
  res.redirect('/users');
});

exports.router = router;
exports.users = users;

