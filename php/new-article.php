

<?php if( $_SERVER["REQUEST_METHOD"]=="POST"){/*csak akkor írjak ki ha a postot kitöltötték*/

 require 'includes/database.php';/*hozzárendelem az adatbázishoz*/
/*ez generálja ki magát az sql adatot*/
  $sql = "INSERT INTO article (title, content, published_at)
          VALUES ('". $_POST['title']."','"
                    . $_POST['content']."','"
                    . $_POST['published_at']. "')
                    ";
/*amennyiben befejezei a dolgokat abban az esetben kiírja mit is generáltunk ki. +kilép*/
/*var_dump($sql); exit;*/


$results = mysqli_query($conn, $sql);



  if ($results === false) {

         echo mysqli_error($conn);

     } else {

    $id = mysqli_insert_id($conn);
       echo "Inserted record with ID: $id  ";
  }

/*  var_dump($_POST);*//*ez írja ki milyen kontentet milyen formán küldtem be*/
} ?>

<?php require 'includes/header.php' ?>

<h2>New article</h2>

<form method="post">

  <div>
    <label for="title">Cím</label>
    <textarea name="title" id="title" placeholder="Article content"></textarea >
  </div>
  <div>
    <label for="content">Kontent</label>
    <textarea name="content" row='4' id="content" placeholder="Article content"></textarea >
  </div>
  <div>
    <label for="published_at">Publikáció ideje</label>
    <textarea name="published_at" type="datetime-local" id="published_at" ></textarea >
  </div>
  <button>Add</button>
</form>

<?php require 'includes/footer.php' ?>
