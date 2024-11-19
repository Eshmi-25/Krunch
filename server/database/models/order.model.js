const { DataTypes } = require('sequelize');
const connection = require('../sql-connection');
const FoodCourt = require('./food_court.model');
const User = require('./user.model');

const Orders = connection.define('orders', {
  order_no: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  fc_no: {
    type: DataTypes.BIGINT,
    references: {
      model: FoodCourt,
      key: 'fc_no',
    },
  },
  email: {
    type: DataTypes.STRING,
    references: {
      model: User,
      key: 'email',
    },
  },
  phone_no: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  total_amt: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  transaction_id: {
    type: DataTypes.STRING,
  },
  delivered: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: false,
  },
  otp: {
    type: DataTypes.INTEGER,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Orders;