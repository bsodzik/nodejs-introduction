var should = require('should'),
	sum = require('../../lib/math/sum');

describe('sum()', function() {
	it('should return 15 for 1, 2, 3, 4, 5', function() {
		sum([1, 2, 3, 4, 5]).should.equal(15);
	});

	it('should return 0 for empty array', function() {
		sum([]).should.equal(0);
	});
});