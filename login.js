var app =angular.module("student", []);
app.controller("login", function($scope ,$http){
        $scope.postuserdata = function(){
        
        // console.log(data);
        $http({
            method:"POST",
            url:"http://5117794dcd51.ngrok.io/login/",
            data:{
                "lib_id":$scope.lib_id,
                "password":$scope.password
            }
        }).then(function mySuccess(response) {
            console.log(response.data[0]);
            if (response.data == "Invalid Credentials"){
                document.getElementById("out_resp").innerHTML="OPPS! wrong password"

            }
            else {
            var value=JSON.stringify(response.data)
            localStorage.setItem("datatech",value)
            window.location.href="teacher/teacherds.html"
            }
        });
    }})
    