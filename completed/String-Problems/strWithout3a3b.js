/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function (a, b) {
  let max = Math.max(a, b);
  let substring = '';
  let prev = '';

  while (max !== 0) {
    max = Math.max(a, b);
    let nextHighest = false;

    if ((max === a && prev === 'a') || (max === b && prev === 'b')) nextHighest = true;

    if (max === a && prev === 'a') max = b;
    if (max === b && prev === 'b') max = a;

    if (max === 0) break;

    if (max === a && prev !== 'a') {
      if (a >= 2 && !nextHighest) {
        substring += 'aa';
        a -= 2;
      } else {
        substring += 'a';
        a--;
      }
      prev = 'a';
    } else if (max === b && prev !== 'b') {
      if (b >= 2 && !nextHighest) {
        substring += 'bb';
        b -= 2;
      } else {
        substring += 'b';
        b--;
      }
      prev = 'b';
    }
  }
  return substring;
};

console.log(strWithout3a3b((a = 1), (b = 2)));

// Input: a = 1, b = 2
// Output: "abb"
// Explanation: "abb", "bab" and "bba" are all correct answers.
