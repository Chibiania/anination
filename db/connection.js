var mongoose = require("mongoose");

var AnimeSchema = new mongoose.Schema(
  {
    name: String,
    genre: String,
    description: String
    // rank: integer
  }
);

mongoose.model("Anime", AnimeSchema);
mongoose.connect("mongodb//localhost/anination");

var seedData = require("./seeds.json");
module.exports = {
  anime: seedData
};
