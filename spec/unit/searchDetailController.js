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
	});
	it('Should return results', function() {
		expect(scope.detail.id).toBe(1);
	});
});