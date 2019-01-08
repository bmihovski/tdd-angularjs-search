describe('', function() {
	var recentlyViewedScope = null;
	beforeEach(function() {
		module('product');
		inject(function($controller, $rootScope) {
			recentlyViewedScope = $rootScope.$new();
			$controller('RecentlyViewedController', {$scope: recentlyViewedScope});
			expect(recentlyViewedScope.recent.length).toBe(0);
			var fakeProductEvent = {productId: 1};
			$rootScope.$broadcast('SELECTEDPRODUCT', fakeProductEvent);
		});
	});
	it('', function() {
		expect(recentlyViewedScope.recent.length).toBe(1);
	});
});