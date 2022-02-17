const express = require("express");
const serverSays = require("debug")("things:server:");

const app = express();

const raiseServer = async (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      serverSays(`server listening at ${port}`);
      resolve();
    });

    server.on("error", (error) => {
      serverSays(
        chalk.red(
          `Error: ${
            error.code === "EADDRINUSE" ? `port ${port} busy` : error.message
          }`
        )
      );
      reject();
    });
  });

module.exports = raiseServer;
