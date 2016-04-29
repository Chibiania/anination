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
if(process.env.NODE_ENV == "production"){
  mongoose.conect(process.env.MONGOLAB_URL);
}
else{
  mongoose.connect("mongodb://localhost/anination");
}

module.exports = mongoose;
