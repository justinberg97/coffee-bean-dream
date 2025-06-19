// const { Sequelize, DataTypes, Model } = require("sequelize");

// // Use Railway's MYSQL_URL if provided, OTHERWISE fallback to the local values
// const MYSQL_URL = process.env.MYSQL_URL || "mysql://root:root@localhost:3306/coffee_db";

// const db = new Sequelize(DB_URL, {
//   dialect: "mysql",
//   logging: false,
// });
// console.log("MYSQL_URL =", process.env.MYSQL_URL);


// module.exports = { db, DataTypes, Model };

// server/db.js
// const { Sequelize, DataTypes, Model } = require("sequelize");

// // Get DB connection details from environment variables
// // These match the environment variables set in docker-compose.yml for the 'backend' service
// const DB_HOST = process.env.DB_HOST || "localhost";
// const DB_USER = process.env.DB_USER || "root";
// const DB_PASSWORD = process.env.DB_PASSWORD || ""; // This will be 'root' when run via Docker Compose
// const DB_NAME = process.env.DB_NAME || "coffee_db";

// const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
//   host: DB_HOST,
//   dialect: "mysql",
//   logging: false, // Set to true to see SQL queries from Sequelize if needed
// });

// module.exports = { db, DataTypes, Model };


// server/db.js
const { Sequelize, DataTypes, Model } = require("sequelize");

let db;

if (process.env.MYSQL_URL) {
  // Railway: use full connection string
  console.log("Using Railway MYSQL_URL:", process.env.MYSQL_URL);
  db = new Sequelize(process.env.MYSQL_URL, {
    dialect: "mysql",
    logging: false,
  });
} else {
  // Local or Docker Compose environment
  const DB_HOST = process.env.DB_HOST || "localhost";
  const DB_USER = process.env.DB_USER || "root";
  const DB_PASSWORD = process.env.DB_PASSWORD || "";
  const DB_NAME = process.env.DB_NAME || "coffee_db";

  console.log("Using Local DB settings:", DB_HOST, DB_NAME);
  db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "mysql",
    logging: false,
  });
}

module.exports = { db, DataTypes, Model };
