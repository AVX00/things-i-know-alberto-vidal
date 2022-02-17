const express = require("express");
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
  const thing = req.body;
  // eslint-disable-next-line no-underscore-dangle
  const response = await Thing.findByIdAndUpdate(thing._id, thing);
  res.status(200);
  res.json(response);
});

module.exports = router;
