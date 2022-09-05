<?php

function showMessidge($name){
  echo "And hy $name !";
}

showMessidge('Mark');

?></p><?php

  function szia($name = "Tibi"){
    echo "And hy $name !";

  }

  szia("Mark");
  szia();//amennyiben üres abban az esetben a "tartalékot" használja azaz a ledefiniáltat argomentum/változó ként
?></p><?php
    function get($name = "Viktor"){
      return "Hello $name !";
    }
    $messa= get();
    echo $messa

      ?></p><?php
      function geti($bool){//EGY FUNKCIÓ LEHT EGY NÉVHEZ RENDELVE
        if ($bool) {
          return "True1 !";
        }else{
          return "False2";
        }

      }
      $messa= geti(true);
      echo $messa;
