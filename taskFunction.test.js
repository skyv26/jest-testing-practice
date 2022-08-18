const { test } = require('picomatch');
const { stringLength, reverseString, Calculator } = require('./taskFunction');

const calc = new Calculator();

// Check the length of string
test('String `Aakash Verma` should return 12 as length', () => {
  expect(stringLength('Aakash')).toBe(6);
});

// Check if the string is empty or not
test('String `` should throw an Error', () => {
  expect(stringLength('')).toThrow(Error);
});

// Check if the string is less than 10 or not
test('String `Lorem Ipsum` should throw an Error', () => {
  expect(stringLength('Lorem Ipsum')).toThrow(Error);
});

// Check whether we are getting the right reverse version of original string or not
test('String `Aakash` should be equal to `hsakaA`', () => {
  expect(reverseString('Aakash')).toMatch('hsakaA');
});

// Calculator test
describe('Calculator', () => {
  it('::add 5 + 4 should be equal to 9', () => {
    expect(calc.add(5,4)).toBe(9)
  })

  it('::add 5 + 4 should not be equal to 9', () => {
    expect(calc.add(5,4)).not.toBe(12)
  })

  
  it('::subtract 4 - 5 should be equal to -1', () => {
    expect(calc.subtract(4,5)).toBe(-1)
  })

  it('::subtract 4 - 5 should not be equal to -1', () => {
    expect(calc.subtract(4,5)).not.toBe(1)
  })

  it('::multiply 4 * 5 should be equal to 20', () => {
    expect(calc.multiply(4,5)).toBe(20)
  })

  it('::divide 4 / 5 should be equal to 0.8', () => {
    expect(Number(calc.divide(4,5).toFixed(1))).toBe(0.8)
  })

  it('::divide 4 / 5 should not be equal to 0.8', () => {
    expect(calc.divide(4,5).toFixed(1)).not.toBe(0.8)
  })
  
});

test('Test should take `aakash` and return `Aakash`', () => {
  expect(capitalize('aakash')).toMath('Aakash');
})