const stringLength = require('./test-practice');
const reverseString = require('./reverse');
const Calculator = require('./calculator');
const capitalized = require('./capitalizedStr');

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

describe('Subtract', () => {
  test('Subtract 12 - 3 equal 9', () => {
    expect(Calculator.subtract(12, 3)).toBe(9);
  });

  test('Subtract 10 - 4 equal 6', () => {
    expect(Calculator.subtract(10, 4)).toBe(6);
  });

  test('Subtract 10 - (-5) equal 1', () => {
    expect(Calculator.subtract(5, 10)).toBe(-5);
  });
});

describe('Divide', () => {
  test('Divide 12 - 3 equal 4', () => {
    expect(Calculator.divide(12, 3)).toBe(4);
  });

  test('Divide 9 - 3 equal 3', () => {
    expect(Calculator.divide(9, 3)).toBe(3);
  });

  test('Divide 10 - 2 equal 5', () => {
    expect(Calculator.divide(10, 2)).toBe(5);
  });
});

it('Should return a string a capitalized string', () => {
  const string = 'mitchu';
  expect(capitalized(string)).toMatch(/Mitchu/);
});
