var app = angular.module("app", []);
app.controller("query", function ($scope, $http) {
    $http({
        method: "GET",
        url: "http://5117794dcd51.ngrok.io/query/show_active/",
    }).then(function (res) {
        console.log(res.data);
        $scope.queries = (res.data)
        console.log($scope.queries);
  });
});
    