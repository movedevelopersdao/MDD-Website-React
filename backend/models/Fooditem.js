const mongoose = require("mongoose");
const { Schema } = mongoose;
const fooditem = new Schema({
  CategoryName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  options: [
    {
      half: { type: Number, required: true },
      full: { type: Number, required: true },
    },
  ],

  description: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("fooditem", fooditem);
