const serverSays = require("debug")("server:DB:");
const mongoose = require("mongoose");

const connectDB = (key) =>
  new Promise((resolve, reject) => {
    mongoose.connect(key, (error) => {
      serverSays(error ? "error al conectiar" : "conection successful");
      if (error) reject();
      resolve();
    });
  });

module.exports = connectDB;
