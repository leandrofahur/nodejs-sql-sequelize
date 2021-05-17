const { Sequelize } = require("sequelize");

const database = new Sequelize("node_complete", "leandro", null, {
  host: "localhost",
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = database;
