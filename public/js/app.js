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
    }
})();
