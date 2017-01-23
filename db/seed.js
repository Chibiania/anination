var mongoose = require("./connection");
var anime = require("./anime");
var genre = require("./genre");


var Genre = mongoose.model("Genre");
var Anime = mongoose.model("Anime");

anime.forEach(function(ani) {
    genre.forEach(function(gen) {
        if (ani.genre == gen.name) {
            gen.anime.push(ani)
            Genre.update({
                "name": gen.name
            }, {
                $push: {
                    anime: ani
                }
            })
        }
    })
})

Anime.remove({}).then(function() {
    Anime.collection.insert(anime).then(function() {
        Genre.remove({}).then(function() {
            Genre.collection.insert(genre).then(function() {
                process.exit();
            });
        });
    });
});
