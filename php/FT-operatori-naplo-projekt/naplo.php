<?php
if( $_SERVER["REQUEST_METHOD"]=="POST")/*csak akkor írjak ki ha a postot kitöltötték*/{
var_dump($_POST);
}
/*dinamizálni*/
$user="Tibi";
$status='V';/*csak nagy V vel működik*/
$username=$user.' ('.$status.')';

$kategoria["első"]="első";
$kategoria["második"]="masodik";

?>
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8" />
  <!--bootstrap-->
  <link rel="stylesheet" href="style/css/bootstrap.min.css">
  <!--css-->
  <link rel="stylesheet" href="style/style.css">
  <title>📝OP Naplo</title>
</head>

<body class="naplo">
  <!--navbar-->
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
  </div>
  <div class="logout">
    <a href="login.php">Kijelentkezés</a>
  </div>
  <!--navbar-->
  <!--kerső rész-->
  <div class="keres">
    <form method="post">
      <div class="row">
        <!--kategória-->
        <div class="col-md-2">
          <label for="kategoria">kategoria</label>
          <p>
            <select name="kategoria" id="kategoria">
              <?php foreach($kategoria as $key => $value){ ?>
              <option value="<?= $key;?>"><?=$value?></option>
              <?php } ?>
            </select>
          </p>
        </div>

        <!--tól-->
        <div class="col-md-2">
          <label for="tol">-tól</label>
          <p> <input type="date" name="tol" value="<?php echo date('Y-m-d'); ?>" id="tol" /></p>
        </div>

        <!--ig-->
        <div class="col-md-2">
          <label for="ig">-ig</label>
          <p><input type="date" name="ig" value="<?php echo date('Y-m-d'); ?>" id="ig" /></p>
        </div>

        <!--kulcsszó-->
        <div class="col-md-2">
          <label for="kulcssz">Kulcsszó</label>
          <p>
            <input type="text" name="kulcsszo" id="kulcssz">
          </p>
        </div>

        <!--nev-->
        <div class="col-md-2">
          <label for="nev">név</label>
          <p><input type="text" name="nev" id="nev"></p>
        </div>
        <!--gomb-->
        <div class="col-md-2">
          <p>
          <input type="submit" value="Keresés">
          </p>
        </div>
      </div>

    </form>
  </div>

</body>

</html>
