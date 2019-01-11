angular.module('product')
	.controller('CartController', ['$scope', '$rootScope', function($scope, $rootScope) {
		$scope.cart = [];
		$rootScope.$on('SAVEDTOCARD', function(productId) {
			$scope.cart.push(productId);
		})
	}]);