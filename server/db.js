// server/db.js
const { Sequelize, DataTypes, Model } = require("sequelize");

// Get DB connection details from environment variables
// These match the environment variables set in docker-compose.yml for the 'backend' service
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_USER = process.env.DB_USER || "root";
const DB_PASSWORD = process.env.DB_PASSWORD || "root"; // This will be 'root' when run via Docker Compose
const DB_NAME = process.env.DB_NAME || "coffee_db";

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  logging: false, // Set to true to see SQL queries from Sequelize if needed
});

module.exports = { db, DataTypes, Model };