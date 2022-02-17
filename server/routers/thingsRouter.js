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
  serverSays(chalk.blue(`${req.method} at /tihngs${req.url}`));
  res.json({ things: "get by id" });
});

router.delete("/:idThing", async (req, res) => {
  serverSays(chalk.blue(`${req.method} at /tihngs${req.url}`));
  res.json({ things: "delete by id" });
});

router.post("/", async (req, res) => {
  serverSays(chalk.blue(`${req.method} at /tihngs${req.url}`));
  res.json({ things: "create thing" });
});

router.put("/", async (req, res) => {
  serverSays(chalk.blue(`${req.method} at /tihngs${req.url}`));
  res.json({ things: "modify thing" });
});

module.exports = router;
