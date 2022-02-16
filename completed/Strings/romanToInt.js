/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  // O(N) | O(1) - Right-to-Left Pass
  let symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let last = s.length - 1;
  let lastVal = symbols[s[last]];
  let total = lastVal;

  for (let i = last - 1; i >= 0; i--) {
    let currentVal = symbols[s[i]];
    if (currentVal < lastVal) {
      total -= currentVal;
    } else {
      total += currentVal;
    }
    lastVal = currentVal;
  }
  return total;
};

console.log(romanToInt('MCMXCIV'));
// 1994
