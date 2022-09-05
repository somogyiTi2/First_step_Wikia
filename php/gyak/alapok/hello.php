
<?php //Nyitórész

$message = "Hello again!";//FONTOS! HA NEM ZÁROD LE A KÖVI SOR NAM MŰKÖDIK!
$message2 = "Blabla!";
//echo $message;
//echo "Hello Word!";//echo kinyomja az üzenetet
var_dump($message." ".$message2);//eggyesíti
//$változó deffiniálása
//nem lehet benne - jel
$szam=5;
$lebegosszam=3.14;
var_dump($szam*$lebegosszam);//összeszrozza

$data = null;

var_dump($message);//megnézhető vele egy változó milyen értéket tartalmaz
var_dump($szam);
var_dump($lebegosszam);

var_dump($data);

$szovegeszam="450";
$szoveg_mega_szam= $szovegeszam * $szam;

var_dump($szoveg_mega_szam);//int 2250

/*$szoveg_mega_szam2= $message * $szam;
var_dump($szoveg_mega_szam2);//error*/

$bool= true;
var_dump(! $bool);//ellentétére fordítja a ! jel ...
$boolf=false;
var_dump($bool or $boolf);//true

$napok= "hétfő\nkedd\nszerda\n";
echo($napok);
echo "szia " . $message2;
echo "szia {$message2} ";

$araylist=["első","második","stb"];
//echo($araylist); NEM LEHET ECHO
var_dump($araylist[1]);//0 VAL KEZDŐDIK
var_dump($araylist[9]);//HA NINCS BENNE ERROR  +NULL

$araylist=[6=>"első",5=>"második","pista"=>"stb"];
var_dump($araylist[5]);
var_dump($araylist['pista']);

$osszekapcsoltTomb =[
[
  "name" =>"Alex",
  "magas"=> 1.80,
  "neme"=>"srác"
],[
  "name" =>"Luca",
  "magas"=>1.75,
  "neme"=>"lány"
], [
  "name" =>"Béla",
  "magas"=>2.10,
  "neme"=>"srác"
]
];
var_dump($osszekapcsoltTomb);
echo("-----válasz--------");
var_dump($osszekapcsoltTomb[1]["neme"]);//lány


foreach($araylist as $pista){// Az első a lista a második az új lista neve amire hivatkozni fog.
  echo $pista, ", ";
}//a klódbok végén nem kell ;

echo("<h1>itt</h1>");

$osszerakashozPelda=["eslő","második","stb"];

foreach ($osszerakashozPelda as $index => $laci) {
  echo $index . '-'. $laci.",";
}
echo("-----válasz--------");
// FONTOS ha közben ugyan azon a néven iktatok be egy változót nem szól viszont kicsréli
$osszerakashozPelda=[
  'a'=>"eeeelső",
  'b'=>"mmmmmásodik",
  'c'=>"sssstb"
];
foreach ($osszerakashozPelda as $index => $osszerakashozPelda) {
  echo $index . '-'. $osszerakashozPelda.",";
};

if(true){
  echo ("true");
};//alapvetően igaz ha nincs állítás, hozzáfogva

$ures=[];

var_dump(empty($ures));//truebool(true)
//empty=üres

if(empty($ures)){
  echo ("Igen üres");
}else{
  echo ("Nem üres");
}
echo("--------------");

var_dump(3==3);//true
//== egyenlő
//=!nem egyenlő
//< kisebb nagyobb >
//<= kisebb nagyobb vagy egyenlő >=

$ho=1;
while ($ho<=12){
  echo $ho .",";
  $ho=$ho+1;
}

echo ("WHILE vége után az értéke ho nak="). $ho.("/\n/");

for ($i=1;$i<=10; $i++){//++$i így is lehet
  echo $i.",";
}
echo ("FOR véges után az értéke ho nak = "). $i.("= illetve még i létezik...\n");

$time=11;

if ($time<12){
  echo "Jóóóóóóóóóóóóóóó Reggelt Vietnám!";
} elseif ($time<18){
  echo "Jó Napot";
} elseif($time<22){
  echo "Szép jó estét";
} else{
  echo "Éjfélig minden ok";
};

echo("--------");

$nap='SZo';

switch ($nap) {
  case 'H':
    echo "Hétfő";
    break;
  case 'K':
      echo "Kedd";
    break;
  case 'SZ':
      echo "Szeda";
      break;
  case 'Cs':
      echo "Csütörtök";
      break;
    case 'P':
      echo "Péntek";
    break;
default:
  echo "Nem tom mi van...";
  break;
}
echo "<h1>SZIA MIZU ITT ÍGY MÜKSZIK IS A HTML CSAK SORONKÉNT KELL ÍRNI NEKI HOGY</h1><p>
vagy is csak ha valamit kodosan is szét akarunk integrálni...
</p>";
echo"<p>
echo
</p>";
echo "<h1>ADATBÁZISHOZ KAPCSOLÁS:</h1>";

/*4 dolog kell ahhoz, hogy összekapcsoljuk az adatbvel*/

$db_host = 'localhost';/*kell a szerver neve*/
$db_name = "cms";/*a db neve*/
$db_user = '123456'; /*felhasználó név*/
$db_pass = '123456' ;/*és  a jelszó*/
/*MI A HIBA?!! WT*/
$conn = mysqli_connect ($db_host, $db_user, $db_pass, $db_name);
/*$conn = new mysqli("localhost", "cms", "555", "cms_www");*/
if (mysqli_connect_error()){
  echo mysqli_connect_error();
  exit;
} echo "Connected succesfully /* \n";

echo "<h1>HELLÓ</h1>";
/*lekérdezés*/
$sql ="SELECT *
      FROM `article`
       ";

$results = mysqli_query($conn,$sql);

if ($results === false) {
  echo mysqli_error($conn);/*miért kell belé a Conn? WT*/
} else {
  $kk = mysqli_fetch_all($results, MYSQLI_ASSOC);/*MYSQLI_ASSOC Odaírja a tulajdonság nevét*/
  /*var_dump*//*print_r($kk[1]['title']);*/
 echo "<table>";
  foreach ($kk as $key => $k) {
    echo "<tr>".
    "<td>".$k["id"]."</td>".
    "<td>".$k["title"]."</td>"
    ."</tr>";
  };
 echo "</table>";
}

//az ár 1,99 GBP
$price= 1.99;
$szia= 10;
  echo "The price is {$price}GBP</br>";//nem mindegy hogy mi van a változóba

  echo "The price is".$price."GBP</br>";

echo "The price is".$price.$szia."GBP</br>";//egybe írja
 echo "The price is $price $szia GBP</br>"; //nem írja egybe
 echo "The price is {$price}GBP</br>"; //jó

 echo "The price is $priceGBP"; //HIBÁS $priceGBP tenné be


$fruit = ['apple', 'banana', 'orange', 'mango'];

 ?>

 <!DOCTYPE html>
 <html>
     <head>

         <title>Fruit</title>
     </head>
     <body>
     <h1>Fruit</h1>
 <ol>
    <?php foreach($fruit as $value){ ?>
    <!--// foreach($fruit => $value){ HIBÁS SZINTAXIS
    => a kulcs milyen értékre utal-->
    <li><?=$value?></li>
   <?php } ?>

    </ol>



     </body>
 </html>

 <?php
 FELADAT:
 $posts = [1 => 'Good news', 3 => 'Read this', 5 => 'Important announcement'];

 ?>
 <!DOCTYPE html>
 <html>
     <head>
         <title>Posts</title>
     </head>
     <body>

     <h1>Posts</h1>

     <ul>
         <?php foreach($posts as $id => $title): ?>
              <li><a href='<?php echo "post.php?id={$id}"; ?>'><?=$title;?></a></li>
              <li><a href="<?php echo 'post.php?id='.$id.'"' ?>><?=$title;?></a></li>"
         <?php endforeach; ?>
     </ul>
     </body>
 </html>
<?php
function szia (){
  code ;
}

echo substr("1997-04-30 11:25:00", 0, -9);
