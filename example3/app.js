'use strict';

var fs = require('fs'),
	path = require('path'),
	root = 'data';

fs.readdir(root, function (err, files) {
	if (err) {
		console.error(err);
		return;
	}

	files.forEach(function (file) {
		var filePath = path.join(root, file);

		fs.stat(filePath, function (err, stats) {
			if (err) {
				console.error(err);
				return;
			}

			if (stats.isFile()) {
				fs.readFile(filePath, function (err, content) {
					if (err) {
						console.error(err);
						return;
					}

					console.log('File "%s" size is %d', file, content.length);
				});
			} else if (stats.isDirectory()) {
				console.log('Directory "%s"', file);
			}
		});
	});

	// console.log("End of program?");
});
