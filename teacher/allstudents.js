var app = angular.module("app", []);
app.controller("allstudents", function ($scope, $http) {
    $http({
        method: "GET",
        url: "http://6ce91d4cb417.ngrok.io/students/",
    }).then(function (res) {
        console.log(res.data);
        $scope.allstds = (res.data)
        console.log($scope.allstds);
  });
});