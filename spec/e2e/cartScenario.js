describe('When product is selected', function() {
	beforeEach(function() {
		browser.get("#!/product/1");
		var saveToCartButton = element(by.buttonText('Save to Cart'));
		saveToCartButton.click();
	});
	it('Then is added to the cart', function() {
		var productsInCart = element.all(by.repeater('product in cart'));
		expect(productsInCart.count()).toBe(1);
	});
});