const Sequelize = require('sequelize')

const connection = new Sequelize(
    'krunch',
    'root',
    '',
    {
      host:'localhost',
      dialect:'mysql',
    }
  )

module.exports=connection