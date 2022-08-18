const { stringLength, reverseString } = require('./taskFunction');

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
