var app = angular.module("app", ['infinite-scroll']);

app.controller('listController', ['$scope','$http', function ($scope,$http) {
    $scope.infiniteList = [];
    $scope.incr = 1;
    
    $scope.scrollTriggered = "";
    
    $scope.loadMore = function(){
      
      $scope.scrollTriggered += "\n Scroll Triggered" 
        for(var i = 0; i< 30; i++){
            if($scope.incr < 30){
                $scope.infiniteList.push("Item " + $scope.incr);
                $scope.incr +=1;
            }
        }
    };

}]);