require("dotenv").config();
const serverSays = require("debug")("server:");
const chalk = require("chalk");
const express = require("express");

const app = express();
const port = process.env.SERVER_PORT;

const server = app.listen(port, () =>
  serverSays(`server listening at ${port}`)
);

server.on("error", (error) => {
  serverSays(
    chalk.red(
      `Error: ${
        error.code === "EADDRINUSE" ? `port ${port} busy` : error.message
      }`
    )
  );
});
