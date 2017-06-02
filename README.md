![toHttp][logo]

# Playstore-api

[![Greenkeeper badge](https://badges.greenkeeper.io/juliandavidmr/playstore-api.svg)](https://greenkeeper.io/)

Full api Play Store


## Installation

### npm

    npm install playstore-api --save

### Node
```js
import playstore from 'playstore-api'; //ES6
//Or
var playstore = require('playstore-api'); //Node normal
```

## Quick Example

```js
/*
  Param 1: title
  Param 2: price -> 'free', 'pay' or 'all'.
  Param 3. language -> 'es', 'en' or 'fr'
 */
playstore.search('tiro', 'free', 'es', function(err, result) {
  console.log(JSON.stringify(result));
});

/*
  Param 1: title
 */
playstore.searchByTitle('tiro', function(err, result) {
	console.log(JSON.stringify(result));
});

/*
  Param 1: title
  Param 2. language -> 'es', 'en' or 'fr'
 */
playstore.searchByLanguage('tiro', 'es', function(err, result) {
	console.log(JSON.stringify(result));
});

/*
  Param 1: title
  Param 2: price -> 'free', 'pay' or 'all'.
 */
playstore.searchByPrice('tiro', 'free', function(err, result) {
	console.log(JSON.stringify(result));
});

```

### Browser
Use RequireJS o WebPack.


## Credits
Full credit to ![anlijudavid]

[logo]: http://www.readwriteweb.es/wp-content/uploads/2016/06/descargar-google-play-store.png
[anlijudavid]: http://www.twitter.com/anlijudavid
