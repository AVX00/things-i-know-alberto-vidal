const { model, Schema } = require("mongoose");

const ThingsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Thing = model("Thing", ThingsSchema, "things");

module.exports = Thing;
