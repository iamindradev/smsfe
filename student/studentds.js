var student_data= localStorage.getItem('data_stud');
    console.log(student_data);
    dataJSON = JSON.parse( student_data);
var id= dataJSON.lib_id;
    console.log(id)
var app =angular.module("app",[]);
app.controller("studentds", function($scope,$http){
    $scope.submit=function(){
        $http({
            method:"POST",
            url:"http://6ce91d4cb417.ngrok.io/query/new/",
            data:{
                'lib_id':id,
                'query':$scope.query ,
            }
        }).then(function(res){
            console.log(res.data)
        })
    }
    $scope.seestatus=function(){
        window.location.href="seestatus.html"
        
    }
})

function raisequery(){
    window.location.href="raisequery.html"
}