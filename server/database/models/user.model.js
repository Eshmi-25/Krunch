const { DataTypes } = require('sequelize')
const connection = require('../sql-connection')

const User = connection.define('user', {
    email: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

module.exports = User;