'use strict';

module.exports = function (arr) {
	return arr.length ? arr.reduce(function (prev, curr) {
		return prev * curr;
	}, 1) : 0;
};
