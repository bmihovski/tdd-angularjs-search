describe('When cart controller receive a message with ProductEvent', function() {
	var scope =  {};
	beforeEach(function() {
		module('product');
		inject(function($controller, $rootScope) {
			scope = $rootScope.$new();
			$controller('CartController', {$scope: scope,
				$rootScope: $rootScope});
			expect(scope.cart.length).toBe(0);
			var fakeProduct = {productId: 1};
			$rootScope.$broadcast('SAVEDTOCARD', fakeProduct);
		})
	});
	it('Then the ProductEvent is stored to the cart', function() {
		expect(scope.cart.length).toBe(1);
	});
});