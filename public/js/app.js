(function() {
    angular
        .module("anination", [
            "ui.router",
            "ngResource"
        ])
        .config([
            "$stateProvider",
            RouterFunction
        ])
        .factory("Anime", [
            "$resource",
            AnimeFunction
        ])
        .factory("Genre", [
            "$resource",
            GenreFunction
        ])
        .controller("indexCtrl", [
            "Anime",
            "Genre",
            indexCtrlFunction
        ])
        .controller("showCtrl", [
            "Anime",
            "Genre",
            "$stateParams",
            showCtrlFunction
        ])


    function RouterFunction($stateProvider) {
        $stateProvider
            .state("welcome", {
                url: "/",
                templateUrl: "/assets/js/ng-views/welcome.html"
            })
            .state("aboutme", {
                url: "/aboutme",
                templateUrl: "/assets/js/ng-views/aboutme.html"
            })
            .state("contact", {
                url: "/contact",
                templateUrl: "/assets/js/ng-views/contact.html"
            })
            .state("anime-index", {
                url: "/anime",
                templateUrl: "/assets/js/ng-views/anime-index.html",
                controller: "indexCtrl",
                controllerAs: "indexVM"
            })
            .state("anime-show", {
                url: "/anime/:name",
                templateUrl: "/assets/js/ng-views/anime-show.html",
                controller: "showCtrl",
                controllerAs: "showVM"
            })
            .state("genre-index", {
                url: "/genre",
                templateUrl: "/assets/js/ng-views/genre-index.html",
                controller: "indexCtrl",
                controllerAs: "indexVM"
            })
            .state("genre-show", {
                url: "/genre/:name",
                templateUrl: "/assets/js/ng-views/genre-show.html",
                controller: "showCtrl",
                controllerAs: "showVM"
            })
    }

    function AnimeFunction($resource) {
        var Anime = $resource("/api/anime/:name");
        return Anime;
    }

    function GenreFunction($resource) {
        var Genre = $resource("/api/genre/:name");
        return Genre;
    }

    function indexCtrlFunction(Anime, Genre) {
        var vm = this;
        vm.anime = Anime.query();
        vm.genre = Genre.query();
    }

    function showCtrlFunction(Anime, Genre) {
        var vm = this;
        vm.anime = Anime.get($stateParams);
        vm.genre = Genre.get($stateParams)
    }
})();
