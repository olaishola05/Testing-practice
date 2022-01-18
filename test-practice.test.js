const stringLength = require('./test-practice');
const reverseString = require('./reverse');
// const Calculator = require('./calculator');
class Calculator {
  add(x, y) {
    return x + y;
  }

  multiply = (x, y) => x * y;

  subtract(x, y) {
    return x - y;
  }

  divide = (x, y) => x / y;
}

it('should return string count', () => {
  expect(stringLength('true')).toBe(4);
});

it('String should not be 1 and not longer than 10', () => {
  expect(stringLength('s')).toBe(1);
});

it('String longer than 10', () => {
  expect(stringLength('I love this testing')).toBe(19);
});

it('Reverse a string', () => {
  expect(reverseString('hello')).toMatch(/olleh/);
});

describe('Calculator', () => {
  test('sum x + y', () => {
    expect(Calculator.add(2, 5)).toBe(7);
  });
});
