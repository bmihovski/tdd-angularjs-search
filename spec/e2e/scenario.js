describe('Given I am searching', function() {
	describe('When I type in search query', function() {
		// Store the searchResult for the use in the test
		var searchResults = null;
		beforeEach(function() {
			// Assemble
			browser.get('/');
			searchResults = element.all(by.repeater('result in results'));
			expect(searchResults.count()).toBe(0);

			// Act
			var searchQueryInput = $('input');
			searchQueryInput.sendKeys('any value');
			var searchButton = element(by.buttonText('search'));
			searchButton.click();
		});

		// Assert
		it('Should see the displayed link on the page', function() {
			expect(searchResults.count()).toBe(1);
		});
		describe('when I type in a search query', function() {
			describe('When only one item is searched', function() {

				beforeEach(function() {
					var firstResult = searchResults.first();
					var resultLink = firstResult.element(by.css('a'));
					resultLink.click();
				});
				it('Then the single search result is displayed at recently viewed', function() {
					var recentlyViewedItems = element.all(by.repeater('item in recent'));
					expect(recentlyViewedItems.count()).toBe(1);
				});
			});
		});
	});

	describe('Given search results', function() {
		describe('When I select an item from the search results', function() {
			var resultId = null;
			beforeEach(function() {
				var resultItem = element.all(by.repeater('result in results')).first();
				var resultLink = resultItem.element(by.css('a'));
				resultLink.click();
				resultId = resultLink.getAttribute('href').then(function(attr) {
					return attr.match(/#!\/product\/(\d+)/)[1];
				});
			});
			it('Then should see the products in the main page component',function(){
				var resultDetail = element(by.css('#searchResultDetail'));
				expect(resultDetail.isPresent()).toBeTruthy();
			});
			it('Then should set the url to the selected product view', function() {
				resultId.then(function(id) {
					var expectedUrl = '!/product/' + id;
					browser.getCurrentUrl()
						.then(function(url) {
							expect(url.split('#')[1]).toBe(expectedUrl);
						});
				});
			});
		});
	});
});