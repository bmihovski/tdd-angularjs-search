var productModule = angular.module('product', ['ngRoute']);

productModule.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/splash', {
		templateUrl: 'app/splash.html',
		controller: 'SplashController'
	})
	.when('/detail/:id', {
		templateUrl: 'app/searchDetail.html',
		controller: 'SearchDetailController'
	})
	.otherwise({
		redirectTo: '/splash'
	});
}]);