var express = require("express");
var hbs = require("express-handlebars");
var db = require("./db/connection")

app = express();

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
  })
})

app.listen(3009, function(){
  console.log("...andddd ACTION!");
});
