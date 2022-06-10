<?php
/*külső változó meghívására 4 hetőség van
1.include= Másik php meghívása.
2.require= include hibakezelő leállító metódussal.
3.include_once=csekkolja, hogy szerepel-e már a kódban és nem frissül rá ha már 1x be volt tölte.
4.require_once=csekkolja, hogy szerepel-e már a kódban és nem frissül rá ha már 1x be volt tölte*/
/*$db_host = "localhost";
$db_name = "cms";
$db_user = "123456";
$db_pass = "123456";*/

include 'includes/database.php';

$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit;
}

if (isset($_GET['id']) && is_numeric($_GET['id'])){//isset=nem null; is_numeric=SZÁM?

}

$sql = "SELECT *
        FROM article
        WHERE id = " . $_GET['id'];// az a poszt jön be amihez odaírom a URL-ben a ? után az id-t

/*var_dump($sql);*/

$results = mysqli_query($conn, $sql);

if ($results === false) {

    echo mysqli_error($conn);

} else {

    $article = mysqli_fetch_assoc($results);

}

?><!--
<!DOCTYPE html>
<html>
<head>
    <title>My blog</title>
    <meta charset="utf-8">
</head>
<body>

    <header>
        <h1>My blog</h1>
    </header>
-->
<?php require 'includes/header.php';?>
    <main>

        <?php if ($article === null): ?>
            <p>Article not found.</p>
        <?php else: ?>

            <article>
                <h2><?= $article['title']; ?></h2>
                <p><?= $article['content']; ?></p>
            </article>

        <?php endif; ?>

    </main>
<?php require 'includes/footer.php';?>
</body>
</html>
