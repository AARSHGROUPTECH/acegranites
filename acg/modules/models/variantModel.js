const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema({
  variantName: {
    type: String,
    required: [true, "variant variantName required"],
  },
  productName: {
    type: String,
    required: [true, "variant productName required"],
  },
  serviceName: {
    type: String,
    required: [true, "variant serviceName required"],
  },
  unitPrice: {
    type: String,
    required: [true, "variant unitPrice required"],
  },
  description: {
    type: String,
    required: [true, "variant attribute required"],
  },
  variantFile: {
    type: String,
    required: [true, "variant variantFile required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Variant", variantSchema);
