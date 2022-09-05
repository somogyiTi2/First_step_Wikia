<?php
session_start();
if(!isset($_SESSION['felhasznalo'])) {$_SESSION['felhasznalo']='';}
kibelep();
?>
<!DOCTYPE html>
<html lang="hu">
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <?php
      if($_SESSION['felhasznalo']!='') {
		echo "Üdv: ". $_SESSION['felhasznalo'];
		echo "<form action='' method='post'>
		      <input type='submit' value='Újra letölt'>
		      <input type='submit' name='Kilep' value='Kilépés'>
		      </form>";
	  } else {
		echo "<form action='' method='post'>
		         <p>
		           <label for='FNev' '>Felhasználónév:</label>
                   <input type='text' name='FNev' id='FNev' value='' >
                 </p>
		         <p>
		           <label for='JSz' '>Jelszó:</label>
                   <input type='password' name='JSz' id='JSz' value='' >
                 </p>
		         <input type='submit' value='Újra letölt'>
		         <input type='submit' name='Belep' value='Belépés'>
		      </form>";
	  }
    ?>
  </body>
</html>
<?php
function kibelep() {
  if (isset($_POST['Kilep'])) $_SESSION['felhasznalo']='';
  if (isset($_POST['Belep']) && isset($_POST['FNev']) && isset($_POST['JSz']))
    if (($_POST['FNev']=='admin') && ($_POST['JSz']=='admin')) $_SESSION['felhasznalo']=$_POST['FNev'];
}
