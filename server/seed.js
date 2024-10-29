const { coffees } = require("./seedData.js");
const { db } = require("./db.js");
const { Coffee } = require("./models/Coffee.js"); // ignore warning
const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(coffees.map((coffee) => Coffee.create(coffee)));

    console.log("successfully populated the database!");
  } catch (error) {
    console.error(error);
  }
};

seed();
