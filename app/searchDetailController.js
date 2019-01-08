angular.module('product')
	.controller('SearchDetailController', ['$scope', '$routeParams', function($scope, $routeParams) {
		$scope.detail = {id: $routeParams.id};
	}]);