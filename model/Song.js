var
  mongoose = require("mongoose");
  songSchema = new mongoose.Schema({
      title: String,
      rating: Number,
      lyrics: String,
      artist: String
  });

// Register this as a model using Schema
var Song = mongoose.model("Song", songSchema);
module.exports = Song;
