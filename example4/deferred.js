'use strict';

var deferred = require('deferred'),
	longOperation, promise;

longOperation = function () {
	var def = deferred();

	setTimeout(function () {
		def.resolve(42);
	}, 1000);

	return def.promise;
};



promise = longOperation();

console.log("Promise: ", promise);

promise.then(function (result) {
	console.log('Result is ', result);
});

console.log("Not yet resolved?");
