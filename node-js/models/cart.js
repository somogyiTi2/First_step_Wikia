const Sequelize = require('sequelize');

const sequelize = require('../util/database');

//a define metódus létrehozza a táblát, ha még nem létezik, és visszaad egy modellt, amivel a táblával tudunk műveleteket végezni.
const Cart = sequelize.define('cart', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
});

module.exports = Cart;
