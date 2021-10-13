const mongoose = require("mongoose");
const hsnSchema = new mongoose.Schema(
  {
    hsn: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    UQC: {
      type: String,
    },
    cap_limit: {
      typr: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HSN", hsnSchema);
