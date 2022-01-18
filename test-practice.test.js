const stringLength = require('./test-practice');
const reverseString = require('./reverse');
const Calculator = require('./calculator');

it('should return string count', () => {
  const string = 'Heloooo';
  expect(stringLength(string)).toBe(4);
});

it('String should not be 1 and not longer than 10', () => {
  expect(stringLength('s')).toBe(1);
});

it('String longer than 10', () => {
  const testStr = 'I love this testing';
  expect(stringLength(testStr)).toBe(19);
});

it('Reverse a string', () => {
  const reverse = 'hello';
  expect(reverseString(reverse)).toMatch(/olleh/);
});

describe('Add x + y', () => {
  test('sum 2, 5', () => {
    expect(Calculator.add(2, 5)).toBe(7);
  });

  test('sum 10 + 5 to be 15', () => {
    expect(Calculator.add(5, 15)).toBe(20);
  });

  test('sum 20 + 5 to be 25', () => {
    expect(Calculator.add(20, 5)).toBe(25);
  });
});

describe('Multiply x * y', () => {
  test('Multiply 3 * 3 equal 9', () => {
    expect(Calculator.multiply(3, 3)).toBe(9);
  });

  test('Multiply 10 * 30 equal 9', () => {
    expect(Calculator.multiply(10, 30)).toBe(300);
  });

  test('Multiply 5 * 2 equal 10', () => {
    expect(Calculator.multiply(5, 2)).toBe(10);
  });
});
