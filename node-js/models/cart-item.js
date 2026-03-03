const Sequelize = require('sequelize');

const sequelize = require('../util/database');

//deffiniálom így milyen tábla lesz integer legyen tehát szám és auto incrementálódjon, ne lehessen null érték és legyen ez a primary key
// a quantity is a number and it cannot be null
const CartItem = sequelize.define('cartItem', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = CartItem;
