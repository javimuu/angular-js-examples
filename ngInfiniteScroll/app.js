var myApp = angular.module('myApp', ['infinite-scroll']);

var numbersController = function($scope){
	$scope.numbers = [];
	$scope.counter = 0;
	for(var i = 0; i < 100; i++){
			$scope.numbers.push(++$scope.counter);
		}

	$scope.loadMore = function(){
		for(var i = 101; i < 200; i++){
			$scope.numbers.push(++$scope.counter);
		}
	}
	// $scope.loadMore();
}

myApp.controller('numbersController', numbersController);