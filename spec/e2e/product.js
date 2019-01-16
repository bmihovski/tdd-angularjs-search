angular.module('anyModule', ['ngMockE2E'])
	.service('productService', ['$http', function($http) {
		return {
			search: function(query) {
				return $http.get('/product/search');
			}
		}
	.controller('ProductController', ['$scope', 'productService', function($scope, productService) {
		$scope.search = function(query) {
			productService(query)
				.success(function(data) {
					$scope.result = data;
				})
				.error(function(data) {
					$scope.error = data;
				});
			};
		}])
	.run(['$httpBackend', function($httpBackend) {
		var products = [{id: '1' , name: 'product1'},
			{id: '2', name: 'product2'}];
		$httpBackend.whenGET('/product/search').respond(products);
		}]);

	}]);