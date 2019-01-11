describe('', function() {
	var scope = {};
	beforeEach(function() {
		module('product');
		inject(function($controller) {
			var routeParams = {
				id : 1
			};
			$controller('SearchDetailController', {
				$scope : scope,
				$routeParams : routeParams
			});
		});
		describe('When an item is saved to cart', function() {
			var savedToCartEventSpy = jasmine.createSpy();
			var searchDetailScope = {};
			beforeEach(function() {
				inject(function($rootScope) {
					$rootScope.$on('SAVEDTOCARD', savedToCartEventSpy);
				});
				var fakeProduct = {
					productId : 1
				};
				searchDetailScope.saveProduct(fakeProduct);
			});
		});
		it('Should return results', function() {
			expect(scope.detail.id).toBe(1);
		});
		afterEach(function() {
			savedToCartEventSpy.calls.reset();
		})
		it('', function() {
			expect(savedToCartEventSpy).toHaveBeenCalled();
		});
	});
});