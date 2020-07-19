var app =angular.module("student", []);
app.controller("login", function($scope ,$http){
        $scope.postuserdata = function(){
        
        // console.log(data);
        $http({
            method:"POST",
            url:"http://6ce91d4cb417.ngrok.io/login/",
            data:{
                "lib_id":$scope.lib_id,
                "password":$scope.password
            }
        }).then(function mySuccess(response) {
            console.log(response.data);
            if (response.data == "Invalid Credentials"){
                document.getElementById("out_resp").innerHTML="OPPS! wrong password"

            }
            else {
            var value=JSON.stringify(response.data.data_teac)
            if(response.data.status == "teacher logged in"){
            localStorage.setItem("data_tech",value)
            window.location.href="teacher/teacherds.html"
            
            }
            else{
                var value=JSON.stringify(response.data.data_stud[0])
                localStorage.setItem("data_stud",value)
                window.location.href="student/studentds.html"
            }
        }
        });
    }}) 
    