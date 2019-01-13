angular.module('product')
	.controller('CartController', ['$scope', '$rootScope', function($scope, $rootScope) {
		$scope.cart = [];
		$rootScope.$on('SAVEDTOCART', function($event, productId) {
			$scope.cart.push(productId);
		});
	}]);
