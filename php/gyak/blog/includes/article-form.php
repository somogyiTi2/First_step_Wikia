<?php if(empty($errors)){
//Hibaüzenetek vége

  /*var_dump($errors);
  exit;*/

 $conn= getDB(); //külső meghívott funkció a csatlakozásból.

/*ez felvisz a article táblába a (. . .) váltoozóba a lentebb kikötött infókat*/
  /*$sql = "INSERT INTO article (title, content, published_at)
          VALUES ('". $_POST['title']."','"
                    . $_POST['content']."','"
                    . $_POST['published_at']. "')
                    ";*/

$sql = "INSERT INTO article (title, content, published_at)  VALUES (?, ?, ?)";//így is lehet felvinni adatokat Azonosító a folyatáshoz 001


/*amennyiben befejezei a dolgokat abban az esetben kiírja mit is generáltunk ki. +kilép*/
/*var_dump($sql); exit;*/


$results = mysqli_query($conn, $sql);//kapcsolodás az adatbázuhoz
$stmt = mysqli_prepare($conn, $sql);


if ($stmt === false) {//ha valami helytelen
    echo mysqli_error($conn);//írja ki mi a hiba
}

if ($published_at=='') { //a a dátum 0 akkor null ha nincs kitöltve és nem is küldi el??? de miért is?
  $published_at = null;
}

else {

    mysqli_stmt_bind_param($stmt, "sss", $_POST['title'], $_POST['content'], $_POST['published_at']);/*sss három s-string Azonosító a folyatáshoz 001*/


    if (mysqli_stmt_execute($stmt)) {//előkészítet utasítást hajt végre???
        $id = mysqli_insert_id($conn);//mysqli_insert_id az utolsó lekérdezés azonosítóját adja vissza
        header ("Location:article.php?id=$id") ;/*
        header ("Location: $protocol://".$_SERVER['HTTP_HOST']."/article.php?id=$id"); //így is lehet odairányítani a felhasználót de csak a nagyon régi böngészőknél nem működik a felette lévő*/
        exit;
      echo  "<script>alert('Inserted record with ID: $id')</script>";//felugró ablak a sikeres azonsítóval JS

    } else {
        echo mysqli_stmt_error($stmt); //az utolsó hiba karaktert adja vissza
      }
    }
  }
//}


/*  var_dump($_POST);*//*ez írja ki milyen kontentet milyen formán küldtem be*/
 ?>



<h2>New article</h2>
<?php if (! empty($errors)) : ?>
        <ul>
               <?php foreach ($errors as $error) : ?>
                   <li><?= $error ?></li>
               <?php endforeach; ?>
           </ul>
       <?php endif; ?>

<form method="post">

  <div>
    <label for="title">Cím</label>
    <input name="title" id="title" placeholder="Article title" value="<?= htmlspecialchars($title,ENT_QUOTES);?>">

  </div>
  <div>
    <label for="content">Kontent</label>
    <textarea name="content" rows="4" cols="40" id="content"
               placeholder="Article content"><?= $content; ?></textarea>
               <!--<script>alert('hacked!')</script>-->
  </div>
  <div>
    <label for="published_at">Publikáció ideje:</label>
    <input type="datetime-local" name="published_at" id="published_at"
              value="<?= $published_at; ?>">
  </div>
  <button>Save</button>
</form>
