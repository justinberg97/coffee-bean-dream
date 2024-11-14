const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const { Coffee }  = require("../models/Coffee")

router.get("/", async (req, res, next) => {
  try {
    const coffees = await Coffee.findAll();
    res.send(coffees).status(200);
  } catch (e) {
    next(e);
  }
});  // working correctly!

router.get("/:coffeeId", async (req, res, next) => {
  try {
    const coffee = await Coffee.findByPk(req.params.coffeeId);

    if (!coffee) {
      res.status(404);
      next();
    } else {
      res.send(coffee);
    }
  } catch (e) {
    next(e);
  }
}); // working correctly!

router.post("/", async (req, res) => {
  const { name, roaster, date, location, origin, image } = req.body;

  try {
    const newCoffee = await Coffee.create({
      name,
      roaster,
      date,
      location,
      origin,
      image,
    });
    res.status(201).json(newCoffee);
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Failed to add a new coffee bag" });
  }
});  // it works!!

router.put("/:id", async (req, res, next) => {
  try {
    const { rating, review} = req.body;
    const coffee = await Coffee.findByPk(req.params.id);
    if (!coffee) return res.status(404).send("Coffee not found");
    await coffee.update({ rating, review });
    res.json(coffee);
  } catch (e) {
    next(e);
  }
});  // it works!! 

router.get("/tasted", async (req, res, next) => {
  try {
    const triedCoffees = await Coffee.findAll({
      where: { rating: { [Op.ne]: null },
  }});

    if (triedCoffees.length === 0) {
      res.status(404);
      next();
    } else {
      res.status(200).send(triedCoffees);
    }
  } catch (e) {
    next(e);
  }
}); // it works!! 

router.delete("/:coffeeId", async (req, res, next) => {
  try {
    const deleted = await Coffee.destroy({
      where: { id: req.params.coffeeId },
    });
    if (!deleted) return res.status(404).send("Coffee not found");
    res.status(204).send();
  } catch (e) {
    next(e);
  }
});  // it works!  

module.exports = router;
