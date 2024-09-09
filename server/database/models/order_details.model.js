const { DataTypes } = require('sequelize');
const connection = require('../sql-connection');
const User = require('./user.model');
const Orders = require('./order.model');
const FoodCourt = require('./food_court.model');

const OrderDetails = connection.define('order_detail', {
  order_no: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    references: {
      model: Orders,
      key: 'order_no',
    },
  },
  item_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    references: {
      model: FoodCourt,
      key: 'fc_no',
    },
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  qty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  packed: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: false,
  },
}, {
  indexes: [
    {
      unique: true,
      fields: ['order_no', 'item_id'],
    },
  ],
});

module.exports = OrderDetails;