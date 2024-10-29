const { coffees } = require("./seedData.js");

const {db} = require('./db');
const {Coffee} = require('./models/Coffee.js');

const seed = async () => {


try {
    // drop and recreate tables per model definitions
    await db.sync({ force: true });

    // insert data
    await Promise.all(coffees.map(coffee => Coffee.create(coffee)));

    console.log("successfully populated the database!");
  } catch (error) {
    console.error(error);
  }
};

seed(); 