var query = require('./query');
var htmlToJson = require('html-to-json');

/**
 * [function description]
 * @param  {[type]}   title    [description]
 * @param  {[type]}   category [description]
 * @param  {[type]}   price    [description]
 * @param  {[type]}   lang     [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
exports.search = function(title, price, lang, callback) {
	var q = query.querySearchApps(title, price, lang);
	console.log("dir: ", q);

	htmlToJson.request({
		uri: q
	}, ['.square-cover', {
		'id': function($product) {
			return $product.attr('data-docid');
		},
		'image': function($product) {
			return $product.find('img').attr('src');
		},
		'price': function($product) {
      var item = $product.find('.display-price').text();
      //console.log(JSON.stringify(item));
			return item;
		},
    'description': function ($product) {
      return $product.find('.description').text();
    },
    'developer': function($product) {
      var item = $product.find('.subtitle');
      return {
        site: item.attr('href'),
        name: item.attr('title')
      };
    }
	}], callback);
}

exports.searchByTitle = function(title, callback) {
	this.search(title, "", "", callback);
};

exports.searchByLanguage = function(title, language, callback) {
	this.search(title, "", language, callback);
};

exports.searchByPrice = function(title, price, callback) {
	this.search(title, price, "", callback);
};
