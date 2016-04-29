var mongoose = require("./connection");
var anime = require("./anime");
var genre = require("./genre");


var Genre = mongoose.model("Genre");
var Anime = mongoose.model("Anime");

Anime.remove().then(function(){
  Anime.collection.insert(anime).then(function(){
    Genre.remove().then(function(){
      Genre.collection.insert(genre).then(function(){
        // for(var i=0; i<anime.length; i++){
        //   anime[i].genre.push(genre[i])
        // }
        console.log(anime);
        console.log(genre);
        process.exit();
      });
    });
  });
});
