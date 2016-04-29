var express = require("express");
var hbs = require("express-handlebars");

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

app.listen(3009, function(){
  console.log("...andddd ACTION!");
});
