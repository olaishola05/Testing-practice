class Calculator {
  //   constructor(add, subtract, multiply, divide) {
  //     this.add = add;
  //     this.subtract = subtract;
  //     this.multiply = multiply;
  //     this.divide = divide;
  //   }

  add(x, y) {
    return x + y;
  }

  multiply = (x, y) => x * y;

  subtract(x, y) {
    return x - y;
  }

  divide = (x, y) => x / y;
}

module.exports = Calculator;
