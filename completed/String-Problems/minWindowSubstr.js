// HARD PROBLEM - 120/226 passes - redo
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let left = 0;
  let right = 0;
  let min = Infinity;
  let checkMin = Infinity;
  let minStr = '';

  while (left < s.length) {
    if (right === s.length) left++;
    else right++;
    let subStr = s.substring(left, right);

    if (subStr !== '' && t.length <= subStr.length) {
      let isValid = true;
      for (let i = 0; i < t.length; i++) {
        if (!subStr.includes(t[i])) {
          isValid = false;
          break;
        }
      }
      if (isValid) {
        min = Math.min(min, subStr.length);
        if (min < checkMin) {
          minStr = subStr;
          checkMin = min;
        }
      }
    }
  }
  return minStr;
};

console.log(minWindow((s = 'a'), (t = 'aa')));

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.