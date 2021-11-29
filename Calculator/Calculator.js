class Calculator {
	static addition(FirstValue, SecondValue) {
		return FirstValue + SecondValue;
	}
	static subtraction(FirstValue, SecondValue) {
		return FirstValue - SecondValue;
	}
	static multiplication(FirstValue, SecondValue) {
		return FirstValue * SecondValue;
	}
	static division(FirstValue, SecondValue) {
		if (SecondValue == 0) throw new Error('Division by zero is prohibited!');
		return parseInt(FirstValue / SecondValue);
	}
}

module.exports = Calculator;
