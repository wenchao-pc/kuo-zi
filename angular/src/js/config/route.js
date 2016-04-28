angular.module("app.router", ["ui.router"])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("index");
        $stateProvider.state("index", {
            url: "/index",
            views: {
                "header": {
                    templateUrl: "src/view/header.html"
                },
                "side": {
                    templateUrl: "src/view/side.html"
                },
                "main": {
                    templateUrl: "src/view/main.html"
                },
                "footer": {
                    templateUrl: "src/view/footer.html"
                }
            }
        }).state("fl", {
            url: "/fl",
            views: {
                "header": {
                    templateUrl: "src/view/header.html"
                },
                "side": {
                    templateUrl: "src/view/side.html"
                },
                "footer": {
                    templateUrl: "src/view/footer.html"
                }
            }
        }).state("ly", {
            url: "/ly",
            views: {
                "header": {
                    templateUrl: "src/view/header.html"
                },
                "side": {
                    templateUrl: "src/view/side.html"
                },
                "footer": {
                    templateUrl: "src/view/footer.html"
                }
            }
        }).state("gyw", {
            url: "/gyw",
            views: {
                "header": {
                    templateUrl: "src/view/header.html"
                },
                "side": {
                    templateUrl: "src/view/side.html"
                },
                "footer": {
                    templateUrl: "src/view/footer.html"
                }
            }
        });
    });
