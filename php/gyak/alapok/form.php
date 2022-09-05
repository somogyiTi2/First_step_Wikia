<?php
if( $_SERVER["REQUEST_METHOD"]=="POST")/*csak akkor írjak ki ha a postot kitöltötték*/{
var_dump($_POST);
}

 ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Form</title>
</head>
<body> <!--a getnél URLbe látszik veszélyes méret határ post securiti nem URL nincs limit-->
  <form method="post"  action="/form.php"> <!--akkor kell postot használni ha szenzitív az adat-->
 <!--action="process_form.php">-->
 <fieldset> <!--részekre szedi-->
   <legend>Legend</legend><!-- fieldset fejléc neve -->
    <input name="username">
    <input  name="password" type="password">

    </fieldset>

<fieldset>


      <legend>Görgetős</legend>
      <label for="lang">Language</label>:
      <select name="lang" id="lang" disabled>
    <option value="en">English</option>
    <option value="fr">French</option>
    <option value="es">Spanish</option>
  </fieldset>

    <fieldset> <!--részekre szedi-->
    <legend>Csersznye</legend>
    <p>Which colours do you like?</p>

    <div>
        <input type="checkbox" name="colours[]" value="red" checked id="szia"> <label for="szia">Piros</label>
    </div>
    <div>
        <input type="checkbox" name="colours[]" value="green"  id="radios_dolgok"> <label for="123">Green</label>
    </div>
    <div>
        <input type="checkbox" name="colours[]" value="blue" id="igen"> <label for="igen">Kék</label>
    </div>
    <label for="radios_dolgok">Kék</label><input id="radios_dolgok" type="radio" name="colour" value="kek" checked>Blue<br>
    <label  for="piros">Piros</label><input id="piros" type="radio" name="colour" value="prios">Red<br>
</fieldset>
    <button>Send</button>
  </form>

</body>
</html>
