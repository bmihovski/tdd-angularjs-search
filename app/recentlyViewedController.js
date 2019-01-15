angular.module('product')
	.controller('RecentlyViewedController',['$scope','$rootScope',function($scope,$rootScope){
		$scope.recent = [];
		$rootScope.$on('SELECTEDPRODUCT',function($event, product){
			$scope.recent.push(product);
		});
	}]);