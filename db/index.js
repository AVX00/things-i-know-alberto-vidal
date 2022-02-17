const serverSays = require("debug")("things:DB:");
const chalk = require("chalk");
const mongoose = require("mongoose");

const dbkey = process.env.MONGO_LOGIN;
const testCollection = "/thingsTest";

const connectDB = async (collection) => {
  let key;
  if (collection === "test") {
    const lastSlash = dbkey.lastIndexOf("/");
    key = dbkey.substring(0, lastSlash) + testCollection;
    serverSays(chalk.blue("connecting to test data-base..."));
  } else key = dbkey;

  const dbConnectionPromise = new Promise((resolve, reject) => {
    mongoose.connect(key, (error) => {
      serverSays(
        chalk.green(error ? "error al conectiar" : "conection successful")
      );
      if (error) reject();
      resolve();
    });
  });

  return dbConnectionPromise;
};

module.exports = connectDB;
