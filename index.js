require("dotenv").config();
const serverSays = require("debug")("things:root:");
const connectDB = require("./db");
const raiseServer = require("./server");

const dbkey = process.env.MONGO_LOGIN;

(async () => {
  try {
    await connectDB(dbkey);
    await raiseServer();
  } catch (error) {
    serverSays(error);
  }
})();
