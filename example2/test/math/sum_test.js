var sum = require('../../lib/math/sum');


module.exports['Sum of 1, 2, 3, 4, 5 is 15'] = function (test) {
    test.equal(sum([1, 2, 3, 4, 5]), 15);
    test.done();
};

exports['Sum of empty array is 0'] = function (test) {
    test.equal(sum([]), 0);
    test.done();
};
