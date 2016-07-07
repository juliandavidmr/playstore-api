var playstore = require('../index');

playstore.search('tiro', 'free', 'es', function(err, result) {
  console.log(JSON.stringify(result));
});

playstore.searchByTitle('tiro', function(err, result) {
	console.log(JSON.stringify(result));
});

playstore.searchByLanguage('tiro', 'es', function(err, result) {
	console.log(JSON.stringify(result));
});

playstore.searchByPrice('tiro', 'free', function(err, result) {
	console.log(JSON.stringify(result));
});
