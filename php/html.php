  <?php
$neve= "Laci";
$time=11;/*letisztultabb a kód ha ide fentre tesszük a változókat*/
$tomb=[
  [
    "title"=>"Első",
    "content"=>"Ez itt az első poszt"
  ],
  [
    "title"=>"Második",
    "content"=>"Ez itt az második poszt"
  ],
  [
    "title"=>"Harmadik",
    "content"=>"Ez itt az harmadik poszt"
  ],
  [
    "title"=>"Negyedik",
    "content"=>"Ez itt az 4. poszt"
  ]
];

?>
<!DOCTYPE html>

<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>Ez itt egy HTML combó php oldal</h1>
    <p>Ez a szöveg most itt php: <?php echo $neve. " ez már az";?></p>
    <p><?= "csak akkor ha csak echot használok akkor lehet < ? =
    és nem kell az echo";?></p>
    <p>Itt html-t használok aztán pedig phpt</p>

    <?php
    if ($time<12): ?>
      Jóóóóóóóóóóóóóóó Reggelt Vietnám!
    <?php elseif ($time<18):  ?>
      Jó Napot
    <?php elseif($time<22): ?>
      Szép jó estét
    <?php else :?>
      Éjfélig minden ok
    <?php endif; ?>
    <main>
      <ul>
        <?php foreach ($tomb as $tomb): ?>
            <li>
              <article>
                <h2><?=$tomb['title'];?></h2>
                <p><?=$tomb['content'];?></p>
              </article>
            </li>
          <?php endforeach; ?>
      </ul>
    </main>
    </body>
</html>
