angular.module('product')
		.controller('SearchDetailController',['$scope','$routeParams','$rootScope', '$timeout',
			function($scope,$routeParams,$rootScope, $timeout){
			$scope.productsToCart = [];
			$scope.$on('SELECTEDPRODUCT', function($event, product) {
				$scope.productsToCart.push(product);
			});
			$scope.saveProduct = function() {
				$timeout(function(){
					$rootScope.$broadcast('SAVEDTOCART', $scope.productsToCart);
				}, 1000);
			}
		}]);