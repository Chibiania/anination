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


app.get("/anime", function(req, res) {
    Anime.find().then(function(anime) {
        res.render("index", {
            anime: anime
        });
    });
});

app.get("/anime/:name", function(req, res) {
    Anime.findOne({
        name: req.params.name
    }).then(function(anime) {
        res.render("anime-show", {
            anime: anime
        })
    })
});

app.get("/genre", function(req, res) {
    Genre.find().then(function(genre) {
        res.render("genre-index", {
            genre: genre
        });
    });
});

app.get("/genre/:name", function(req, res) {
    Genre.findOne({
        name: req.params.name
    }).then(function(gen) {
        res.render("genre-show", {
            gen: gen
        });
    });
});

// app.get("/anime/action", function(req, res) {
//     Genre.find().then(function(genre) {
//         // console.log(genre);
//         res.render("genre-show", {
//             genre: genre
//         });
//     });
// });
//
// app.get("/anime/comedy", function(req, res) {
//     Anime.find().then(function(anime) {
//         res.render("comedy", {
//             anime: anime
//         });
//     });
// });
//
// app.get("/anime/horror", function(req, res) {
//     Anime.find().then(function(anime) {
//         res.render("horror", {
//             anime: anime
//         });
//     });
// });
//
// app.get("/anime/adventure", function(req, res) {
//     Anime.find().then(function(anime) {
//         res.render("adventure", {
//             anime: anime
//         });
//     });
// });
//
//
// app.get("/anime/kids", function(req, res) {
//     Anime.find().then(function(anime) {
//         res.render("kids", {
//             anime: anime
//         });
//     });
// });
//
// app.get("/anime/drama", function(req, res) {
//     Genre.findOne().then(function(genre) {
//         console.log(genre);
//         res.render("drama", {
//             genre: genre
//         });
//     });
// });
//
// app.get("/anime/:name", function(req, res) {
//     Anime.findOne({
//         name: req.params.name
//     }).then(function(anime) {
//         res.render("anime-show", {
//             anime: anime
//         });
//     });
// });


// about me get

// contact get

app.listen(app.get("port"), function() {
    console.log("...andddd ACTION!");
});
