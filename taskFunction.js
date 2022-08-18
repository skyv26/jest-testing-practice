const stringLength = (string) => {
  const strLength = string.length;
  if(strLength > 0 && strLength <= 10) {
    return string.length;
  } else {
    throw new Error('String length should be atleast 1 character long and less than or equal to 10');
  }
};

const reverseString = (string) => string.split('').reverse().join('');

class Calculator {
  add = (num1, num2) => num1 + num2;
  subtract = (num1, num2) => num1 - num2;
  multiply = (num1, num2) => num1 * num2;
  divide = (num1, num2) => num1/num2;
}

module.exports = { stringLength, reverseString, Calculator };