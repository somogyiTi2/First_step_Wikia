<?php
/*külső változó meghívására 4 hetőség van
1.include= Másik php meghívása.
2.require= include hibakezelő leállító metódussal.
3.include_once=csekkolja, hogy szerepel-e már a kódban és nem frissül rá ha már 1x be volt tölte.
4.require_once=csekkolja, hogy szerepel-e már a kódban és nem frissül rá ha már 1x be volt tölte*/

function getDB(){
$db_host = "localhost";
$db_name = "cms2";
$db_user = "123456";
$db_pass = "123456";

$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit;
}
return $conn;
}
