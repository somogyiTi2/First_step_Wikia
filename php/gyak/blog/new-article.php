<?php

require 'includes/database.php';/*hozzárendelem az adatbázishoz*/
$errors = [];
$title = '';
$content = '';
$published_at = '';

if( $_SERVER["REQUEST_METHOD"]=="POST"){/*csak akkor írjak ki ha a postot kitöltötték*/

  $title=$_POST['title'];
  $content = $_POST['content'];
  $published_at = $_POST['published_at'];

//hibaüzenetek
 $errors = validateArticle($title, $content, $published_at);
if ($_POST['title']==''){
  //die("Printelve"); //A die() függvény az exit() függvény álneve.
  $errors[]="Title is required";
}

if ($_POST['content']==''){
  $errors[]="Content is required";
}
if($published_at != ''){
  $date_time = date_create_from_format('Y-m-d H:i:s', $published_at);

  if ($date_time === false) {
    //  $errors[] = 'Invalid date and time';
  } else {
      $date_errors = date_get_last_errors();

      if ($date_errors['warning_count'] > 0) {
          $errors[] = 'Invalid date and time 00';
      }
  }

//date_create_from_format megnézi hogy ilyen formályú-e a date amit beviszek
}}
?>
<?php require 'includes/header.php' ?>
<?php require 'includes/article.php' ?>

<?php require 'includes/article-form.php' ?>

<?php require 'includes/footer.php' ?>
