var app=angular.module("app",[
    "ui.bootstrap",
    "app.router",
    "app.ctrl",
    "app.dir",
    "app.ser",
    "app.fil",
    "app.restUrl"
]);
angular.module("app.ctrl",[]);
angular.module("app.dir",[]);
angular.module("app.ser",[]);
angular.module("app.fil",[]);

app.run(["$rootScope","$location",function ($rootScope,$location) {
    $rootScope.$on("$stateChangeSuccess",function () {
        $rootScope.root_state=$location.$$path;
    })
}]);
