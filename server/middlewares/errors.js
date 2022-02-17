const serverSays = require("debug")("things:error:");

const notFound = (req, res) => {
  serverSays("request at a non regulated endpoint");
  res.status(404);
  res.json({ resource: "not found" });
};
// eslint-disable-next-line no-unused-vars
const generalError = (err, req, res, next) => {
  res.status(500);
  res.json({ error: err });
};

module.exports = { generalError, notFound };
