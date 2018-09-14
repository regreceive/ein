const Sequelize = require('sequelize');

const host = process.env.MYSQL_HOST || 'localhost';
const port = process.env.MYSQL_PORT || '3306';
const username = process.env.MYSQL_USERNAME || 'root';
const pwd = process.env.MYSQL_PWD || '123456';

const sequelize = new Sequelize('echoin', username, pwd, {
  host,
  port,
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
