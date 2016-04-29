var express = require("express");
var hbs = require("express-handlebars");
var mongoose = require("./db/connection");

app = express();

var Anime = mongoose.model("Anime");

app.set("port", process.env.PORT || 3009);
app.set("view engine", "hbs");
app.engine(".hbs", hbs ({
  extname: ".hbs",
  partialsDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout"
}));

app.use("/assets", express.static("public"));

app.get("/" , function(req, res){
  res.render("welcome");
});

app.get("/anime", function(req, res){
  Anime.find().then(function(anime){
    res.render("index", {
      anime: anime
    });
  });
});

app.get("/anime/genre", function(req, res){
  Anime.find().then(function(anime){
    res.render("genre-index", {
      anime: anime
    });
  });
});

app.get("/anime/:genre", function(req, res){
  Anime.find().then(function(anime){
    res.render("genre-show", {
      anime: anime
    });
  });
});

app.get("/anime/:genre/:name", function(req, res){
  Anime.findOne({genre:req.params.genre, name: req.params.name}).then(function(anime){
    res.render("anime-show", {
      anime: anime
    });
  });
});


// about me get

// contact get

app.listen(app.get("port"), function(){
  console.log("...andddd ACTION!");
});
