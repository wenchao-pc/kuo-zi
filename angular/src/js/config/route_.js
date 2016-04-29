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
        }).state("index.main", {
            url: "/main/:page",
            views: {
                "page":{
                    templateUrl: function (e) {
                        return "src/view/mainTpls/" + e.page + ".html";
                    }
                }
            }
        })
    });
