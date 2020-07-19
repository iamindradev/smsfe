var app = angular.module("app", []);
app.controller("query", function ($scope, $http) {
    $http({
        method: "GET",
        url: "http://6ce91d4cb417.ngrok.io/query/show_active/",
    }).then(function (res) {
        console.log(res.data);
        $scope.queries = res.data;
        // console.log($scope.queries);
  });
    $scope.acceptquery= function(x){
        console.log(x)
    $http({
        method:"POST",
        url:"http://6ce91d4cb417.ngrok.io/query/accept/",
        data:{
            'id':x.id
        }
    }).then(function(res){
        var value=JSON.stringify(res.data[0])
        console.log(JSON.stringify(res.data))
        localStorage.setItem("data_to_update",value)
        window.location.href="updtquery.html"
    })
    }
    
    $scope.rejectquery= function(x){
        console.log(x)
        $http({
            method:"POST",
            url:"http://6ce91d4cb417.ngrok.io/query/remove/",
            data:{
                'id':x.id
            }
  
        }).then(function(res){
            console.log(res.data)
            document.getElementById("swal").innerHTML= res.data;
        }) ;
      }
});
    