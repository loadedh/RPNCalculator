const assert = require('assert');
const rpn = require('./index');

describe('rpn should', () => {
    it('add 1 and 1 together', () => {
        assert.deepEqual(rpn(1, 1, '+'), 2);
    });

    it('subtract 1 from 3', () => {
        assert.deepEqual(rpn(3, 1, '-'), 2);
    });

    it('multiply 7 and 4', () => {
        assert.deepEqual(rpn(4, 7, '*'), 28);
    });

    it('divide 9 by 2', () => {
        assert.deepEqual(rpn(9, 2, '/'), 4.5);
    });

    it('add 1 and 1 and 1 together', () => {
        assert.deepEqual(rpn(1, 1, '+', 1, '+'), 3);
    });

    it('multiply 2 and 3 and 4 together', () => {
        assert.deepEqual(rpn(2, 3, '*', 4, '*'), 24);
    });

    it('calculate 5 1 2 + 4 × + 3 −', () => {
        assert.deepEqual(rpn(5, 1, 2, '+', 4, '*', '+', 3, '-'), 14);
    });

    it('throw if a number is a string', () => {
        const toThrow = () => rpn(5, 1, 2, '+', '4', '*', '+', 3);
        assert.throws(toThrow);
    });

    it('throw if an operator is invalid', () => {
        const toThrow = () => rpn(5, 1, 2, '+', 4, 'b', '+', 3);
        assert.throws(toThrow);
    });

    it('partially apply unfinished stacks', () => {
        const partial1 = rpn(2, 3, '*', 4);

        assert.deepEqual(partial1('+'), 10);
    });

    it('partially apply unfinished stacks twice', () => {
        const partial1 = rpn(2, 3, '*', 4);
        const partial2 = partial1('+', 3);

        assert.deepEqual(partial2('+'), 13);
    });

    // it('partially binds no operators', () => {
    //     const c = rpn(1,2,3,4,5,6);
    //     assert.deeqEqual(c('+' , '+', '+', '+', '+'), 21);
    // });
});