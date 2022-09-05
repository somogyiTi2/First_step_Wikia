<?php
/*
$db_host = "localhost";
$db_name = "cms";
$db_user = "123456";
$db_pass = "123456";

$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit;
}
*/

include 'includes/database.php';
$conn= getDB();
$sql = "SELECT *
        FROM article
      /*  WHERE id=0 *//*ez mi van ha nicns a if használatára*/
        ORDER BY published_at;";

$results = mysqli_query($conn, $sql);

if ($results === false) {
    echo mysqli_error($conn);
} else {
    $articles = mysqli_fetch_all($results, MYSQLI_ASSOC);
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
<a href="new-article.php">new-article.php</a>

    <main>
        <?php if (empty($articles)): ?>
            <p>No articles found.</p>
        <?php else: ?>

            <ul>
                <?php foreach ($articles as $article): ?>
                    <li>
                        <article>
                            <h2><a href="article.php?id=<?= $article['id']; ?>">
                              <?= htmlspecialchars($article['title']); ?></a></h2><!--htmlspecialchars(átalakítja HTML -ből valami mássá hogy az DB-be ne jelenjen meg.) -->
                            <p><?= $article['content']; ?></p>
                        </article>
                    </li>
                <?php endforeach; ?>
            </ul>

        <?php endif; ?>
    </main>
    <?php require 'includes/footer.php';?>
</body>
</html>
