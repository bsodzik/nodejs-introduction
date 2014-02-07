var multiply = require('../../lib/math/multiply');

exports['Multiplication of 1, 2, 3, 4, 5 is 120'] = function (test) {
    test.equal(multiply([1, 2, 3, 4, 5]), 120);
    test.done();
};

exports['Multiplication of 0, 1, 2 is 0'] = function (test) {
    test.equal(multiply([0, 1, 2]), 0);
    test.done();
};

exports['Multiplication of empty array is 0'] = function (test) {
    test.equal(multiply([]), 0);
    test.done();
};
