var express = require("express");
var hbs = require("express-handlebars");
var mongoose = require("./db/connection");

app = express();

var Genre = mongoose.model("Genre");
var Anime = mongoose.model("Anime");

app.set("port", process.env.PORT || 3009);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
    extname: ".hbs",
    partialsDir: "views/",
    layoutsDir: "views/",
    defaultLayout: "layout"
}));

app.use("/assets", express.static("public"));

app.get("/", function(req, res) {
    res.render("welcome");
});

app.get("/aboutme", function(req, res) {
    res.render("aboutme");
});

app.get("/contact", function(req, res) {
    res.render("contact");
});


app.get("/api/anime", function(req, res) {
    Anime.find().then(function(anime) {
        // res.render("index", {
        //     anime: anime
        // });
        res.json(anime)
    });
});

app.get("/api/anime/:name", function(req, res) {
    Anime.findOne({
        name: req.params.name
    }).then(function(anime) {
        // res.render("anime-show", {
        //     anime: anime
        // })
        res.json(anime)
    })
});

app.get("/api/genre", function(req, res) {
    Genre.find().then(function(genre) {
        // res.render("genre-index", {
        //     genre: genre
        // });
        res.json(genre)
    });
});

app.get("/api/genre/:name", function(req, res) {
    Genre.findOne({
        name: req.params.name
    }).then(function(genre) {
        // res.render("genre-show", {
        //     genre: genre
        // });
        res.json(genre)
    });
});

app.listen(app.get("port"), function() {
    console.log("...andddd ACTION!");
});
