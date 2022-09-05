<?php
/* a cookie amig a böngészőben tárolódik addig a session a szerveren*/
/*ez a cookie*/
setcookie('example','hello', time()+ 60 * 60 * 24 * 2);
/*így állítok be cookie-t */
echo 'Cookie set.';

var_dump($_COOKIE);


//session_star();/*AHOL HASZNÁLNI AKAROM OTT MINDEN OLDALON SZERPELNIE KELL A SESSION-NEK!!!!!!!!!*/
/*ez a session */
/*issettel a létezését röviditem le*/
if (isset($_SESSION['ezavaltozo'])){
  echo 'ez a változó létezik';
  /*amennyiben létezik meg lehet nézni hogy van e értéke erre 2 lehetőség is van*/
  if($_SESSION['ezavaltozo'] && $_SESSION['ezavaltozo'] !=''){
    echo "ez a két feltétel ugyan azt ellenörzi.";
  }
}
 else {
  echo 'ebben az esetben van változó';
}
