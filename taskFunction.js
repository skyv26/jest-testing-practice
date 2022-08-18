const stringLength = (string) => {
  const strLength = string.length;
  if(strLength > 0 && strLength <= 10) {
    return string.length;
  } else {
    throw new Error('String length should be atleast 1 character long and less than or equal to 10');
  }
};

module.exports = stringLength;