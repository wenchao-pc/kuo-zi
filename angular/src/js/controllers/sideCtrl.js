angular.module("app.ctrl")
    .controller("side_ctrl", ["$scope", "$http", "RestUrl", function ($scope, $http, RestUrl) {
        $scope.inClass = "";

        $scope.showCollapse = function (id) {
            $scope.inClass = id;
        };

        $http({
            url: RestUrl.GET_SIDE_LIST
        }).success(function (data) {
            $scope.items=data.info;
        });

    }]);
