'use strict';

var parseUrl = require('url').parse,
	users = require('./users'),
	responseSender, getRequestData;

module.exports = function (request, response) {
	var path = parseUrl(request.url).pathname,
		method = request.method.toLowerCase(),
		send = responseSender(response),
		user;

	if (path.indexOf('/user/') === 0) {
		user = path.slice(6);

		if (method === 'get') {
			send(user ? users[user] : users);
		} else if ((method === 'post' || method === 'put') && user) {
			getRequestData(request, function (newUser) {
				users[user] = newUser;
				send(users);
			});
		} else if (method === 'delete' && users[user]) {
			delete users[user];
			send(users);
		} else {
			send();
		}
	} else {
		send();
	}
};

responseSender = function (response) {
	return function (result) {
		if (result) {
			response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
			response.end(JSON.stringify(result));
		} else {
			response.writeHead(404);
			response.end("Resource not found!");
		}
	};
};

getRequestData = function (request, cb) {
	var data = '';
	request.on('data', function (chunk) {
		data += chunk;
	});
	request.on('end', function () {
		cb(JSON.parse(data));
	});
};
