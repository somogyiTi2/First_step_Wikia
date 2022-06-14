<?php
if( $_SERVER["REQUEST_METHOD"]=="POST")/*csak akkor írjak ki ha a postot kitöltötték*/{
var_dump($_POST);
}
/*dinamizálni*/
$user="Tibi";
$status='V';/*csak nagy V vel működik*/
$username=$user.' ('.$status.')';

$kategoria=["első","második","stb"];

?>
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <!--bootstrap-->
  <link rel="stylesheet" href="style/css/bootstrap.min.css">
  <!--css-->
  <link rel="stylesheet" href="style/style.css">
  <title>Felvétel</title>
</head>

<body class="felvitel">
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
  <!--felvitel-->
  <form method="post">
  <div class="row">
    <div class="col-md-3">
        <label for="kategoria">kategoria</label>
        <p>
          <select name="kategoria" id="kategoria">
            <?php foreach($kategoria as $key => $value){ ?>
            <option value="<?= $key;?>"><?=$value?></option>
            <?php } ?>
          </select>
        </p>
    </div>
    <div class="col-md-3">
      <label for="leiras">Leírás</label>
      <textarea name="leiras" id="leiras" rows="10" cols="80"></textarea>
    </div>
    <div class="col-md-3">
      <label for="edate">Eseménydátum:</label>
      <p><input type="date" name="edate" value="<?php echo date('Y-m-d'); ?>" id="edate" /></p>
    </div>
    <div class="col-md-3">
      <label for="rdate">Rögzitési dátum:</label>
      <p><input type="date" name="rdate" value="<?php echo date('Y-m-d'); ?>" id="edate" /></p>
      </div>
    <div class="col-md-3">
      <input type="submit" value="Bevitel">
    </div>

  </div>
    </form>
</body>
</html>
