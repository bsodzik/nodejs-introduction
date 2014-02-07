'use strict';

module.exports = function (arr) {
	return arr.reduce(function (prev, curr) {
		return prev + curr;
	}, 0);
};
