require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../dist")));

app.use("/api", require("./routes"));

app.use((req, res) => {
  res.status(404).send({
    error: "404 - Not Found",
    message: "No route found for the requested URL",
  });
});

app.use((error, req, res, next) => {
  console.error("SERVER ERROR: ", error);
  if (res.statusCode < 400) res.status(500);
  res.send({
    error: error.message,
    name: error.name,
    message: error.message,
    table: error.table,
  });
});

module.exports = app;
