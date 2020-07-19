var app = angular.module("teacher",[])
app.controller("teacherds",function($scope, $http){
    $scope.allstudents =function(){
        $http({
            method:"GET",
            url:"http://6ce91d4cb417.ngrok.io/login/students/"
        }).then(function(res){
            console.log(res.data[0])
            $scope.students = JSON.parse(JSON.stringify( res.data[0]));
        
        })
    }
    $scope.addstudent=function(){
        $http({
            method:"POST",
            url:"http://6ce91d4cb417.ngrok.io/addstudent/",
            data:{
               'lib_id':$scope.libraryid,
               'name':$scope.name,
               'father_name':$scope.fname,
               'course':$scope.course,
               'branch':$scope.branch,
               'sec':$scope.section,
               'email':$scope.email,
               'mobile_no':$scope.contact,
               
            },  
        }).then(function(res){
            console.log(res.data)
            if (res.data == "successful")
            document.getElementById("output").innerHTML="added succesfully"
            else
            document.getElementById("output").innerHTML="something is wrong"
        })
    }
})

function openallstudent(){
    window.location.href="allstudents.html"
}

function openaddstd(){
    window.location.href="addstudent.html"
}

function query(){
    window.location.href="query.html"
}
