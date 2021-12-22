const Mongoose = require("mongoose");

const BookSchema = new Mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    house_phone: Number,
    address: String,
  },
  { timestamps: true, versionKey: false }
);

module.exports = Mongoose.model("book", BookSchema);
