require("dotenv").config();
const serverSays = require("debug")("server:");
const express = require("express");

const app = express();
const port = process.env.SERVER_PORT;

const server = app.listen(port, () =>
  serverSays(`server listening at ${port}`)
);
