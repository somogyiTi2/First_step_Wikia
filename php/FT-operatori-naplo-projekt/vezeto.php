<?php
if( $_SERVER["REQUEST_METHOD"]=="POST")/*csak akkor írjak ki ha a postot kitöltötték*/{
var_dump($_POST);
}
/*dinamizálni*/
$user="Tibi";
$status='V';/*csak nagy V vel működik*/
$username=$user.' ('.$status.')';

$users=["laci", "imi", "béla", "kevin"];
$hastatusz["V"]="Vezető";
$hastatusz["O"]="Operátor";

$kategoria["első"]="első";
$kategoria["második"]="masodik";
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!--bootstrap-->
  <link rel="stylesheet" href="style/css/bootstrap.min.css">
  <!--css-->
  <link rel="stylesheet" href="style/style.css">
  <title>Vezetői</title>
</head>
<body class="vezeto">
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="naplo.php"><?=$username;?></a>
        <a class="navbar-brand" href="felvitel.php">Felvitel</a>
        <?php
        if($status=='V'){
        echo '<a class="navbar-brand" href="vezeto.php">Vezető</a>';
        }
        ?>
      </div>
      </nav>
    <!--beviteli mezők-->
    <form method="post">
      <div>
<!--Jogosultásgok-->
        <fieldset>
          <legend>Jogosultásgok</legend>
          <select name="user_name">
            <?php foreach($users as $key => $value){ ?>
            <option value="<?= $key;?>"><?=$value?></option>
            <?php } ?>
          </select>
          <select name="status">
            <?php foreach($hastatusz as $key => $value){ ?>
            <option value="<?= $key;?>"><?=$value?></option>
            <?php } ?>
          </select>
          <p>
            <input style="margin:10px 0 0 0" type="submit" value="Bevitel">
          </p>
        </fieldset>
    </form>
<!--új felhasználó-->
    <fieldset>
      <form method="post">
        <legend>Új felhasználó</legend>
        <input name="LDAP_id" placeholder="LDAP_id"></input>
        <input name="teljesnev" placeholder="teljesnev"></input>
        <select name="ujstatusz">
          <?php foreach($hastatusz as $key => $value){ ?>
          <option value="<?= $key;?>"><?=$value?></option>
          <?php } ?>
        </select>
        <p>
          <input style="margin:10px 0 0 0" type="submit" value="Bevitel">
        </p>
      </form>
    </fieldset>
<!--kategoria update-->
    <fieldset>
      <legend>Kategória névváltoztatás</legend>
      <form method="post">
        <p>
          <select name="kategoria" id="kategoria">
            <?php foreach($kategoria as $key => $value){ ?>
            <option value="<?= $key;?>"><?=$value?></option>
            <?php } ?>
          </select>
        <input name="ujkatnev" placeholder="Új név"></input>
          </p>
        <input style="margin:10px 0 0 0" type="submit" value="Bevitel">
      </form>
    </fieldset>
<!--új név-->
    <fieldset>
      <legend>Új kategória</legend>
      <input name="ujkategoriaid" placeholder="Új azonosító"></input>
      <input name="ujkategoria" placeholder="Új kategória neve"></input>
      <p>  <input style="margin:10px 0 0 0" type="submit" value="Bevitel"></p>
    </fieldset>
    </div>

</body>

</html>
