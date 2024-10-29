const express = require("express");
const router = express.Router();

router.use("/coffees", require("./coffees"));

module.exports = router;
