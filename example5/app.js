'use strict';

var http    = require('http')
  , handler = require('./handler');

http.createServer(handler).listen(8080, function () {
	console.log('Server is up and running on port 8080');
});
