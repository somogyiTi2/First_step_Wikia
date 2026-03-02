const Sequelize = require('sequelize');

// Egyetlen Sequelize példány, amit minden modell megoszt.
// Ha a konstruktort exportálnánk, a hívók nem kapnák meg a kapcsolatot,
// ezért nem működne a `define`, és a modellek induláskor összeomlanának.
// Itt konfiguráljuk és nyitjuk meg a MySQL kapcsolatot (adatbázis, user, jelszó, host/dialektus).
const sequelize = new Sequelize(
  'node-complete',   // adatbázis neve
  'root',            // felhasználónév
  'Qwert123',        // jelszó
  {
    dialect: 'mysql', // milyen adatbázis típus
    host: 'localhost' // hol fut
  }
);

module.exports = sequelize;
