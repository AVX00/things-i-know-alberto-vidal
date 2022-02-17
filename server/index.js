const chalk = require("chalk");
const express = require("express");
const morgan = require("morgan");
const serverSays = require("debug")("things:server:");
const options = require("../userOptions");
const { notFound, generalError } = require("./middlewares/errors");
const getRouter = require("./routers/thingsRouter");

const app = express();

const raiseServer = async () => {
  const { port, collection, permissions } = await options();

  const serverUpPromise = new Promise((resolve, reject) => {
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
  app.use("/things", getRouter(permissions));
  app.use(notFound);
  app.use(generalError);

  return serverUpPromise;
};

module.exports = raiseServer;
