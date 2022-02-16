/**
 * @param {string} s
 * @return {boolean}
 */
// Given a string s, return true if a permutation of the string could form a palindrome.
var canPermutePalindrome = function (s) {
  let map = {};

  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }

  let values = Object.values(map);

  let count = 0;
  for (let i = 0; i < values.length; i++) {
    count += values[i] % 2;
  }

  return count <= 1;
};

console.log(canPermutePalindrome('carerac'));
// Input: s = "code"
// Output: false
