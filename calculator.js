class Calculator {
  static add(x, y) {
    return x + y;
  }

  static multiply = (x, y) => x * y;

  static subtract(x, y) {
    return x - y;
  }

  static divide = (x, y) => x / y;
}

console.log(Calculator.multiply(4, 2));

module.exports = Calculator;
