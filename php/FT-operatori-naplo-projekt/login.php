<?php
if( $_SERVER["REQUEST_METHOD"]=="POST")/*csak akkor írjak ki ha a postot kitöltötték*/{
var_dump($_POST);
} ?>
 <!DOCTYPE html>
 <html lang="en" dir="ltr">
   <head>
     <meta charset="utf-8">
     <link rel="stylesheet" href="style/style.css">
     <title>Login-OP_naplo</title>
   </head>
   <body class="login">
     <form class="center" method="post">
       <div>
    <label for="title">Felhasználó név</label>
    <p><input name="user" id="user" ></input ></p>
  </div>
 <div >
    <label for="title">Jelszó</label>
    <p><input name="passw" id="passw" type="password" ></input ></p>
  </div>
  <input type="submit" value="Belépés">
  </form>
  <a href="naplo.php">naplo</a>
   </body>
 </html>
