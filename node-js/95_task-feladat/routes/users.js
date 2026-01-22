const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const path = require('path');
const usersData = require('./home');

router.get('/users', (req, res, next) => {
  console.log('/users',usersData.users);
  res.render('users', {users: usersData.users, docTitle: 'Users', path: '/users'});
//   res.sendFile(path.join(__dirname, '..', 'views', 'users.html'));
});

exports.router = router;