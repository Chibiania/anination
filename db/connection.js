var mongoose = require("mongoose");

var AnimeSchema = new mongoose.Schema(
  {
    name: String,
    genre: String,
    img: String,
    description: String,
    watch_url: String
    // rank: Number
  }
);

mongoose.model("Anime", AnimeSchema);
mongoose.connect("mongodb://localhost/anination");

module.exports = mongoose;
