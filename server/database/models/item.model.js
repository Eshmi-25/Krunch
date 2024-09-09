const { DataTypes } = require('sequelize')
const connection = require('../sql-connection')

const Item = connection.define('item', {
    item_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
    },
    item_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
})

module.exports = Item;