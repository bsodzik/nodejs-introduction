var should = require('should'),
	multiply = require('../../lib/math/multiply');

describe('multiply()', function() {
	it('should return 120 for 1, 2, 3, 4, 5', function() {
		multiply([1, 2, 3, 4, 5]).should.equal(120);
	});

	it('should return 0 for 0, 1, 2', function() {
		multiply([0, 1, 2]).should.equal(0);
	});

	it('should return 0 for empty array', function() {
		multiply([]).should.equal(0);
	});
});
