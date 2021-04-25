/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
  let resultArr = [];
  let map = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 };

  for (let i = 0; i < Object.keys(map).length; i++) {
    for (let j = 0; j < Object.keys(map).length; j++) {
      resultArr.push(Object.keys(map)[i] + Object.keys(map)[j]);
    }
  }
};

console.log(originalDigits((s = 'fviefuro')));
