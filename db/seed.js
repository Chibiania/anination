var mongoose = require("./connection");
var seedData = require("./seeds");

var Anime = mongoose.model("Anime");

Anime.remove().then(function(){
  Anime.collection.insert(seedData).then(function(){
    process.exit();
  });
});
