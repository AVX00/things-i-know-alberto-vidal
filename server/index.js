const express = require("express");
const morgan = require("morgan");
const { notFound, generalError } = require("./middlewares/errors");
const serverSays = require("debug")("things:server:");

const app = express();

const raiseServer = (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      serverSays(`server listening at http://localhost:${port}`);
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

app.use(morgan("tiny"));
app.use(express.json());

app.use(notFound);
app.use(generalError);

module.exports = raiseServer;
