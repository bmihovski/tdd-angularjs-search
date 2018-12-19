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
	});
	describe('Given search results', function() {
		describe('When I select an item from the search results', function() {
			var resultId = null;
			beforeEach(function() {
				var resultItem = element.all(by.repeater('result in results')).first();
				var resultLink = resultItem.element(by.css('a'));
				resultLink.click();
				resultId = resultLink.getAttribute('href').then(function(attr) {
					return attr.match(/#!\/detail\/(\d+)/)[1];
				});
			});
			it('Should see the details in the main page component',function(){
				var resultDetail = element(by.css('#searchResultDetail'));
				expect(resultDetail.isPresent()).toBeTruthy();
			});
			it('Should set the url to the selected detail view', function() {
				resultId.then(function(id) {
					var expectedUrl = '!/detail/' + id;
					browser.getCurrentUrl()
						.then(function(url) {
							expect(url.split('#')[1]).toBe(expectedUrl);
						});
				});
			});
		});
	});
});