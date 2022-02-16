/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    let str = '' + i;
    count += checkOnes(str);
  }
  return count;
};

const checkOnes = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') count++;
  }
  return count;
};

console.log(countDigitOne(13));

// Input: n = 13
// Output: 6
