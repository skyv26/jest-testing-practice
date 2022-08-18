const stringLength = (string) => {
  const strLength = string.length;
  if(strLength > 0 && strLength <= 10) {
    return string.length;
  } else {
    throw new Error('String length should be atleast 1 character long and less than or equal to 10');
  }
};

const reverseString = (string) => string.split('').reverse().join('');

module.exports = { stringLength, reverseString };