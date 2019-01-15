angular.module('product').controller(
		'SearchDetailController',
		[ '$scope', '$routeParams', '$rootScope',
				function($scope, $routeParams, $rootScope) {
					$scope.detail = {
						id : $routeParams.id
					};
					$scope.saveProduct = function(productId) {
						$rootScope.$broadcast('SAVEDTOCART', productId);
					};
				} ]);