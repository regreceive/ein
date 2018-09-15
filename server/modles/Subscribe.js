const Sequelize = require('sequelize');

const sequelize = require('../sequelize');

const Subscribe = sequelize.define('Subscribe', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  email: {
    type: Sequelize.STRING(255),
    validate: { isEmail: true },
    unique: true,
    allowNull: false,
  },

  ip: {
    type: Sequelize.STRING(42),
    validate: { isIP: true },
  },
});

Subscribe.sync();

module.exports = Subscribe;
