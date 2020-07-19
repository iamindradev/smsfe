var student_data= localStorage.getItem('data_stud');
    console.log(student_data);
    dataJSON = JSON.parse( student_data);
var id= dataJSON.lib_id;
    console.log(id)
var app= angular.module("app",[]);
app.controller("seestatus",function($scope,$http){
    $http({
        method: "POST",
        url: "http://6ce91d4cb417.ngrok.io/query/show_status/",
        data:{
            'lib_id':id
        }
    }).then(function (res) {
        console.log(res.data);
        $scope.queries = res.data;
    })
})