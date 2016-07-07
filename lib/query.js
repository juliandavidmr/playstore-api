var config = require('./config');

exports.querySearchApps = function(title, price, lang) {
	var q = "";
	if (title != undefined) {
		q = q.concat(config.url_apps.concat("search?q=").concat(title));
	} else {
		return {
			error: 1,
			menssage: "Title required."
		};
	}


	/*	if (config.categ[category]) {
			console.log("CA: ", config.categ[category]);
			q = q.concat("&c=".concat(category));
		} else {*/
	q = q.concat("&c=".concat(config.categ.apps)); //Default 'apps'
	//}

	if (price == "free") {
		q = q.concat("&price=".concat(config.price.free));
	} else if (price == "pay" || price == 'pay') {
		q = q.concat("&price=".concat(config.price.pay));
	} else if (price == "all") {
		q = q.concat("&price=".concat(config.price.all));
	} else {
		q = q.concat("&price=".concat(config.price.all)); //Default 'all' prices
	}

	if (lang == "es") {
		q = q.concat("&hl=".concat(config.lang.es));
	} else if (lang == "en") {
		q = q.concat("&hl=".concat(config.lang.es));
	} else if (price == "fr") {
		q = q.concat("&hl=".concat(config.lang.fr));
	} else {
		q = q.concat("&hl=".concat(config.lang.en)); //Default languaje 'en'
	}

	return q;
}

//    https://play.google.com/store/search?q=tiro&c=apps&authuser=0
