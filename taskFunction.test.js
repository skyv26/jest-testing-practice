const stringLength = require('./taskFunction');

test('String `Aakash Verma` should return 12 as length', () => {
  expect(stringLength('Aakash')).toBe(6);
});

test('String `` should throw an Error', () => {
  expect(stringLength('')).toThrow(Error);
});

test('String `Lorem Ipsum` should throw an Error', () => {
  expect(stringLength('Lorem Ipsum')).toThrow(Error);
});