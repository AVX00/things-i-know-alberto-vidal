require("dotenv").config();
const serverSays = require("debug")("things:root:");
const connectDB = require("./db");
const raiseServer = require("./server");
const options = require("./userOptions");

const port = process.env.SERVER_PORT;
const dbkey = process.env.MONGO_LOGIN;

(async () => {
  const userSelection = await options();

  try {
    await connectDB(dbkey);
    await raiseServer(port);
  } catch (error) {
    serverSays(error);
  }
})();
