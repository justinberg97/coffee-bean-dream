const express = require("express");
const router = express.Router();
const { Coffee } = require("../models/Coffee.js");

router.get("/", async (req, res, next) => {
  try {
    const coffees = await Coffee.findAll();
    res.send(coffees);
  } catch (e) {
    next(e);
  }
});

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
});

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
    res.status(500).json({ error: "Failed to add a new coffee bag" });
  }
});

router.put("/:coffeeId/rate", async (req, res, next) => {
  try {
    const coffee = await Coffee.findByPk(req.params.coffeeId);
    if (!coffee) return res.status(404).send("Coffee not found");
    await coffee.update({ rating, review });
    res.json(coffee);
  } catch (e) {
    next(e);
  }
});

router.get("/tasted", async (req, res, next) => {
  try {
    const triedCoffees = await Coffee.findAll({
      where: { rating: !isNull },
    });

    if (!triedCoffees) {
      res.status(404);
      next();
    } else {
      res.send(triedCoffees);
    }
  } catch (e) {
    next(e);
  }
});

router.delete("/:coffeeId", async (req, res, next) => {
  try {
    const deleted = await Coffee.destroy({
      where: { id: req.params.coffeeIdId },
    });
    if (!deleted) return res.status(404).send("Coffee not found");
    res.status(204).send();
  } catch (e) {
    next(e);
  }
});

module.exports = router;
