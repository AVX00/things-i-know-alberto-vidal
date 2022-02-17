require("dotenv").config();
const serverSays = require("debug")("things:root:");
const chalk = require("chalk");
const express = require("express");
const raiseServer = require("./server");

const port = process.env.SERVER_PORT;

(async () => {
  await raiseServer(port);
})();
