var app =angular.module("student", []);
app.controller("login", function($scope ,$http){
        $scope.postuserdata = function(){
        
        // console.log(data);
        $http({
            method:"POST",
            url:"http://5dc47170c62f.ngrok.io/login/",
            data:{
                "lib_id":$scope.lib_id,
                "password":$scope.password
            }
        }).then(function mySuccess(response) {
            console.log(response)
          })

    }})