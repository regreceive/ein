const Sequelize = require('sequelize');

const sequelize = new Sequelize('echoin', 'root', '123456', {
  host: 'localhost',
  port: '3306',
  operatorsAliases: Sequelize.Op,
  dialect: 'mysql',
  define: {
    freezeTableName: true,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelize;
