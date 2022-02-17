const chalk = require("chalk");
const express = require("express");
const serverSays = require("debug")("things:router:");
const Thing = require("../../db/models/Things");

const router = express.Router();

router.get("/", async (req, res) => {
  const things = await Thing.find();
  res.json(things);
});

router.get("/:idThing", async (req, res) => {
  const id = req.params.idThing;
  const foundThing = await Thing.find({ id });
  res.status(200);
  res.json(foundThing);
});

router.delete("/:idThing", async (req, res) => {
  const id = req.params.idThing;
  const deletedThing = await Thing.findOneAndDelete({ id });
  res.status(202);
  res.json(deletedThing);
});

router.post("/", async (req, res) => {
  const thing = req.body;
  const response = await Thing.create(thing);
  res.status(201);
  res.json(response);
});

router.put("/", async (req, res) => {
  serverSays(chalk.blue(`${req.method} at /tihngs${req.url}`));
  res.json({ things: "modify thing" });
});

module.exports = router;
