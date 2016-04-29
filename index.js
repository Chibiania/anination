var express = require("express");
var hbs = require("express-handlebars");
var db = require("./db/connection")

app = express();

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
  res.render("genre", {
    anime: db.anime
  });
});

app.get("/anime/:name", function(req, res){
  var reqName = req.params.name;
  var result;
  db.anime.forEach(function(anime){
    if(reqName === anime.name){
      result = anime;
    }
  });
  res.render("anime-show", {
    anime: result
  });
});

app.listen(app.get("port"), function(){
  console.log("...andddd ACTION!");
});
