'use strict';

var sum = require('./math/sum'),
	multiply = require('./math/multiply');

console.log('Sum[1,2,3,4,5] = ', sum([1, 2, 3, 4, 5]));
console.log('Multiply[1,2,3,4,5] = ', multiply([1, 2, 3, 4, 5]));
