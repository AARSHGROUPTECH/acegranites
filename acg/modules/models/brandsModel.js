const mongoose = require("mongoose");

const BrandsSchema = new mongoose.Schema({
  brandsName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Brands", BrandsSchema);
