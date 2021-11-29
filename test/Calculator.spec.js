const assert = require('chai').assert;
const forEach = require('mocha-each');
const Calculator = require('../Calculator/Calculator.js');

describe('Calculator', () => {
	forEach([
		[8, 0, 8],
		[-6, 2, -4],
		[43, -231, -188],
	]).it('addition of %d and %d should be %d', (FirstValue, SecondValue, expected) => {
		assert.equal(Calculator.addition(FirstValue, SecondValue), expected);
	});

	forEach([
		[5, 4, 1],
		[3, 7, -4],
		[210, -117, 327],
	]).it('subtraction of %d and %d should be %d', (FirstValue, SecondValue, expected) => {
		assert.equal(Calculator.subtraction(FirstValue, SecondValue), expected);
	});

	forEach([
		[1, 1, 1],
		[0, 5, 0],
		[4, -3, -12],
		[5, 2, 10],
	]).it(
		'multiplication of %d and %d should be %d',
		(FirstValue, SecondValue, expected) => {
			assert.equal(Calculator.multiplication(FirstValue, SecondValue), expected);
		}
	);

	forEach([
		[1, 1, 1],
		[2, -2, -1],
		[140, 5, 28],
		[12, 6, 2],
	]).it('division of %d and %d should be %d', (FirstValue, SecondValue, expected) => {
		assert.equal(Calculator.division(FirstValue, SecondValue), expected);
	});

	forEach([
		[0, 0],
		[4, 0],
	]).it('division of %d and %d should throw error', (FirstValue, SecondValue) => {
		assert.throws(
			() => {
				Calculator.division(FirstValue, SecondValue);
			},
			Error,
			'Division by zero is prohibited!'
		);
	});
});
