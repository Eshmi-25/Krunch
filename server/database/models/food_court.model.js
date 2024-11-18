const { DataTypes } = require('sequelize')
const connection = require('../sql-connection')

const FoodCourt = connection.define('food_court', {
    fc_no: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    landmark: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    campus: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    map_link: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image_link: {
        type: DataTypes.STRING,
        allowNull: true,
    }
})

module.exports = FoodCourt;