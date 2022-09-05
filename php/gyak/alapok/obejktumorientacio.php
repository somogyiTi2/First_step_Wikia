<?php
/*hozzunk létre egy osztályt nagybetüvel kell kezdődni az osztály névnek*/
/*ooprogfolyt.php -ba került
class Item{


}
Itt meghívom:*/

require 'ooprogfolyt.php';
$my_item = new Item();
/*így tudok bevinni adatot az osztályba*/
$my_item->name = 'Tibi';
/*lehet még benne nem leiniicializálunk adatot is bevinni*/
$my_item->price = 2.5;
/*ha inicializáltat inicializálunk újra akkor az új fog rá vonatkozni.*/
$my_item->leiras = 'ujrainici';

$my_item->sayHello();/*itt meghívom a funkciót*/

var_dump($my_item);
 ?>
