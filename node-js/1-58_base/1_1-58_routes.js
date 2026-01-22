const fs = require('fs'); // Beimportáljuk a fájlkezeléshez szükséges fs modult

/* ezt adom hozzá a routes.js-ben */
const requestHandler = (req, res) => {
  /* ezt adom hozzá a routes.js-ben */
  const url = req.url; // Lekérdezzük a kérés URL-jét
  const method = req.method; // Lekérdezzük a HTTP metódust (pl. GET, POST)
  //process.exit(); // Ezzel a sorral leállítanánk a Node.js folyamatot
  res.setHeader('Content-Type', 'text/html'); // Beállítjuk a válasz fejlécét: HTML típus

  // Ha a főoldalra érkezik kérés ("/" URL)
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Home</title></head>');
    res.write('<body>');
    // Egyszerű HTML űrlap: POST metódussal elküldi az adatot a /message URL-re
    res.write(
      '<form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Click</button></form>'
    );
    res.write('<h1>Home</h1>');
    res.write('</body>');
    res.write('</html>');
    return res.end(); // Lezárjuk a választ, és kilépünk a handlerből
  }

  // Ha az űrlap elküldi az adatot a /message URL-re POST módszerrel
  if (url === '/message' && method === 'POST') {
    const body = []; // Ide gyűjtjük be a bejövő adat chunk-jeit

    // Eseménykezelő: minden beérkező adatrészletet (chunk) hozzáadunk a body tömbhöz
    req.on('data', chunk => {
      console.log(chunk); // Pl. <Buffer 6d 65 73 73 61 67 65 3d 70 72 6f 62 61> ami "message=proba" byte-formátumban
      body.push(chunk); // Elmentjük a chunk-ot
    });

    // Amikor minden adat beérkezett, az 'end' esemény fut le
    return req.on('end', () => {
      //A Buffer egy Node.js osztály, amely bináris adatokat (pl. fájlok, hálózati üzenetek) képes alacsony szinten kezelni – úgy, hogy még nem alakítja át őket szöveggé.
      // Összefűzzük az összes chunk-ot egyetlen Buffer-é, majd stringgé konvertáljuk
      const parsedBody = Buffer.concat(body).toString();
      console.log('parsedBody', parsedBody); // Kimenet: "message=proba"

      // Feldolgozzuk a szöveget: split alapján szétválasztjuk a kulcs-érték párt
      const message = parsedBody.split('=')[1]; // Itt: "proba"
      console.log(parsedBody.split('=')); // ["message", "proba"]

      // Kiírjuk a kapott üzenetet egy fájlba (szinkron módon, egyszerűség kedvéért)
      fs.writeFileSync('message.txt', message);

      // Visszairányítjuk a felhasználót a főoldalra (HTTP 302)
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end(); // Lezárjuk a választ
    });
  }

  // Ha más URL-re jön kérés, akkor alapértelmezett HTML választ adunk
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello</h1></body>');
  res.write('</html>');
  res.end(); // Lezárjuk a választ
};
/* ezt adom hozzá a routes.js-ben */
/* ezzel rendelerem ki: */
// module.exports = requestHandler;
// az is lehetséges, hogy csak részeit renderelem ki így
// 1. módszer
// module.exports.handler = requestHandler;
// module.exports.someText = 'Ez egy szöveg';

//rövidítve: exports.someText = 'Ez egy szöveg';

// 2. módszer
module.exports = {
    handler: requestHandler,
    someText: 'Ez egy szöveg'
};
/* ezt adom hozzá a routes.js-ben */
