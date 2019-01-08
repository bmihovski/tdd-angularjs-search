angular.module('product')
.controller('RecentlyViewedController', ['$scope', '$rootScope', function($scope, $rootScope) {
	$scope.recent = [];
	$scope.$on('SELECTEDPRODUCT', function(fakeProductEvent) {
		$scope.recent.push(fakeProductEvent);
	});
}]);