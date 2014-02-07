'use strict';

var express = require('express'),
	users = require('./users'),
	app = express();

app.use(express.bodyParser());

app.get('/user', function (req, res) {
	res.json(users);
});

app.get('/user/:user', function (req, res, next) {
	var user = req.params.user;

	if (users[user]) {
		res.json(users[user]);
	} else {
		next();
	}
});

app.post('/user/:user', function (req, res) {
	var user = req.params.user, newUser = req.body;

	users[user] = newUser;
	res.json(users);
});

app.put('/user/:user', function (req, res) {
	var user = req.params.user, newUser = req.body;

	users[user] = newUser;
	res.json(users);
});

app.delete('/user/:user', function (req, res, next) {
	var user = req.params.user;

	if (users[user]) {
		delete users[user];
		res.json(users);
	} else {
		next();
	}
});

// Handle remaining requests
app.use(function (req, res) {
    res.send(404, "Resource not found!");
});

// Global error handler
app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.send(500, "Internal server error!");
});

app.listen(8080);
