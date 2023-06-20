const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Company", companySchema);
