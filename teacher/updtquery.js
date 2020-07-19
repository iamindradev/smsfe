var datatoupdt= localStorage.getItem("data_to_update");
var data= JSON.parse(datatoupdt);
console.log(data.id)
var app =angular.module("app",[]);
app.controller("updatequery", function($scope, $http){
        $scope.query =data.query
        $scope.key__lib_id=data.key__lib_id;
        $scope.key__name=data.key__name,
        $scope.key__father_name= data.key__father_name,
        $scope.key__course = data.key__course, 
        $scope.key__branch= data.key__branch   
        $scope.key__sec=data.key__sec,
        $scope.key__mobile_no=data.key__mobile_no,
        $scope.key__email=data.key__email,
        $scope.date = data.date,
        $scope.name="Devendra"
        console.log(data.key__name);
        console.log($scope.key__name);

  $scope.update =function(x){
      console.log(data.id)
      console.log(key__lib_id)
      $http({
          method:"POST",
          url:"http://6ce91d4cb417.ngrok.io/student/update/",
          data:{
            'id':data.id,
            // 'query':$scope.name,
            'lib_id':$scope.key__lib_id,
            'key__name':$scope.key__name,
            'key__father_name':$scope.key__father_name,
            'key__course':$scope.key__course,
            'key__branch':$scope.key__branch,
            'key__sec':$scope.key__section,
            'key__mobile_no':$scope.key__mobile_no,
            'key__email':$scope.key__email,
          }
      }).then(function(res){
          console.log(res.data)
      })
  }
}
)