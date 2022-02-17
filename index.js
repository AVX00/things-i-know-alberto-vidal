require("dotenv").config();
const serverSays = require("debug")("things:root:");
const connectDB = require("./db");
const raiseServer = require("./server");
const options = require("./userOptions");

(async () => {
  const { port, collection, permissions } = await options();

  try {
    await connectDB(collection);
    await raiseServer(port, permissions);
  } catch (error) {
    serverSays(error);
  }
})();
