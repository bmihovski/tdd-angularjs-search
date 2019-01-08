describe('', function() {
	var selectedProductSpy = jasmine.createSpy();
	var searchControllerScope = {};
	beforeEach(function(){
		module('product');
		inject(function($controller,$rootScope){
			searchControllerScope = $rootScope.$new();
			$controller('SearchController',
					{$scope:searchControllerScope, $rootScope: $rootScope});
			$rootScope.$on('SELECTEDPRODUCT', selectedProductSpy);
			var fakeProduct = {productId:1};
			searchControllerScope.selectProduct(fakeProduct);
			});
		});

	afterEach(function() { searchControllerScope = {};
	searchControllerScope = {};
		selectedProductSpy.calls.reset();
   });

	it('', function() {
		expect(selectedProductSpy).toHaveBeenCalled();
	});

});
