const path = require('path');

//process.mainModule.filename visszaadja a fő modul fájlnevét, amely általában az alkalmazás belépési pontja (például app.js vagy index.js).
// A path.dirname() függvény pedig visszaadja a megadott elérési út könyvtár részét, tehát ezzel a kóddal megkapjuk az alkalmazás fő könyvtárának elérési útját.
// module.exports = path.dirname(process.mainModule.filename);

// MÁR ELÖREGEDETT MOST MÁR:
// A require.main visszaadja a fő modult, amely az alkalmazás belépési pontja.
// A require.main.filename pedig a fő modul fájlnevét adja vissza.
// Így a path.dirname(require.main.filename) segítségével megkapjuk az alkalmazás fő könyvtárának elérési útját.
module.exports = path.dirname(require.main.filename);