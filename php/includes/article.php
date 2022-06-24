<?php

/**
 * Get the article record based on the ID
 *
 * @param object $conn Connection to the database
 * @param integer $id the article ID
 *
 * @return mixed An associative array containing the article with that ID, or null if not found
 */


function getArticle($conn, $id){
  $sql ="SELECT *
          FROM article
          WHERE id=?";

  $stmt =mysqli_prepare($conn, $sql);//csatlakozáshoz

  if($stmt === false){
    echo mysqli_error($conn);
  }
  else{
    mysqli_stmt_bind_param($stmt, "i", $id);
//az sql-be be kell illeszteni a számot ami id néven érkezik

        if (mysqli_stmt_execute($stmt)) {//előkészítet utasítást hajt végre

          $result = mysqli_stmt_get_result($stmt);//Eredménykészletet kér le egy előkészített utasításból mysqli_result objektumként

          return mysqli_fetch_array($result, MYSQLI_ASSOC);
//a feadch miatt kapunk tömbe adatokat és MYQLI_ASSOC miatt (összekapcsolt )vagy is asszociatív

        }

    }
}

 ?>
