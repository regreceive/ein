const Sequelize = require('sequelize');

const username = process.env.MYSQL_USERNAME || root;
const pwd = process.env.MYSQL_PWD || '123456';
const sequelize = new Sequelize('echoin', username, pwd, {
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
