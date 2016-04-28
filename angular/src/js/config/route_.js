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
        }).state("index.page1", {
            url: "/index.page1",
            views: {
                "page":{
                    templateUrl: "src/view/demo/page1.html"
                }
            }
        }).state("index.page2", {
            url: "/index.page2",
            views: {
                "page":{
                    templateUrl: "src/view/demo/page2.html"
                }
            }
        });
    });
