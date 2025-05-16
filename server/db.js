const { Sequelize, DataTypes, Model } = require("sequelize");

const db = new Sequelize("coffee_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

module.exports = { db, DataTypes, Model };
