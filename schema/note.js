const mongoose = require("mongoose");

const note = new mongoose.Schema({
  name: String,
  title: String,
  keywords: String,
  para: String,
  images: String,
});

module.exports = mongoose.model("Note", note);
