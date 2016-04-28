angular.module("app.ctrl")
    .controller("header_ctrl", ["$scope", function ($scope) {
        $scope.items_right = [
            {
                id: "sy",
                name: "首页",
                url: "#",
                state:"index"
            },
            {
                id: "fl",
                name: "分类",
                url: "gl",
                state:"fl"
            }
        ];
        $scope.items_left = [
            {
                id: "gyw",
                name: "关于我",
                url: "gyw",
                state:"gyw"
            },
            {
                id: "ly",
                name: "留言",
                url: "ly",
                state:"ly"
            }
        ];
    }]);
