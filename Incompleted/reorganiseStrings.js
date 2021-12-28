var reorganizeString = function (s) {
  let newStr = '';
  let otherStr = '';
  let hashCount = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === s[i]) {
      if (newStr[newStr.length - 1] === s[i - 1]) {
        newStr += '#';
        newStr += s[i - 1];
      } else {
        newStr += s[i];
        newStr += '#';
        newStr += s[i - 1];
      }
      hashCount++;
    } else {
      otherStr += s[i];
    }
  }

  let pointer = 0;
  let finalStr = '';
  if (hashCount === otherStr.length) {
    for (let i = 0; i < newStr.length; i++) {
      if (newStr[i] === '#') {
        finalStr += otherStr[pointer];
        pointer++;
      } else {
        finalStr += newStr[i];
      }
    }
    return finalStr;
  } else {
    return '';
  }
};
console.log(reorganizeString('baaba'));
