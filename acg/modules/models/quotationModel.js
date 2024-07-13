const mongoose = require("mongoose");

const quotationSchema = new mongoose.Schema({
  quotationNumber: {
    type: String,
    required: [true, "quotation quotationNumber required"],
  },
  client: {
    type: String,
    required: [true, "quotation client required"],
  },
  quotationDate: {
    type: String,
    required: [true, "quotation quotationDate required"],
    minlength: 5,
  },
  projectType: {
    type: String,
    required: [true, "quotation projectType required"],
    minlength: 5,
  },
  unit: {
    type: String,
    required: [true, "quotation unit required"],
  },
  dimensionLength: {
    type: String,
    required: [true, "quotation dimensionLength required"],
  },
  dimensionWidth: {
    type: String,
    required: [true, "quotation dimensionWidth required"],
  },
  dimensionDepth: {
    type: String,
    required: [true, "quotation dimensionDepth required"],
  },
  volumeLtr: {
    type: String,
    required: [true, "quotation volumeLtr required"],
  },
  durationHr: {
    type: String,
    required: [true, "quotation durationHr required"],
  },
  flowRate: {
    type: String,
    required: [true, "quotation flowRate required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Quotation", quotationSchema);
