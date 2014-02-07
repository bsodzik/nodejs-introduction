'use strict';

var fs = require('fs'),
	path = require('path'),
	util = require('util'),
	promisify = require('deferred').promisify,
	readdir = promisify(fs.readdir),
	readFile = promisify(fs.readFile),
	stat = promisify(fs.stat),
	root = 'data';

readdir(root).map(function (fileName) {
	return path.join(root, fileName);
}).map(function (filePath) {
	return stat(filePath).then(function (stats) {
		return { path: filePath, stats: stats };
	});
}).map(function (data) {
	if (data.stats.isDirectory()) {
		return util.format('Directory "%s"', data.path);
	}
	return readFile(data.path).then(function (content) {
		return util.format('File "%s" size is %d', data.path, content.length);
	});
}).map(function (result) {
	console.log(result);
}).done(function () {
	console.log("Processing finished!");
}, function (err) {
	console.error("Error:", err);
});
