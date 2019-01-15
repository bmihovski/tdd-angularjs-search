angular.module('product')
.controller('SearchController',['$scope','$rootScope',function($scope,$rootScope){
	$scope.results = [];
	$scope.search = function(searchQuery){
		$scope.results.push({id:1, name: searchQuery});
	};
	$scope.selectProduct = function() {
		$rootScope.$broadcast('SELECTEDPRODUCT', $scope.results[$scope.results.length - 1]);
	}
}]);