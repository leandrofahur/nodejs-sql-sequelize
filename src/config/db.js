const { Sequelize } = require("sequelize");

const db = new Sequelize("test", "leandro", null, {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
    acquire: 30000,
  },
});

module.exports = db;
