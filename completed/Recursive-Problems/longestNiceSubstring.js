/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
  let map = {};

  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i].toLowerCase()] !== undefined && map[s[i].toUpperCase()] !== undefined) {
      continue;
    }

    let leftSubstr = longestNiceSubstring(s.substring(0, i)); // call recursive
    let rightSubstr = longestNiceSubstring(s.substring(i + 1));
    return leftSubstr.length >= rightSubstr.length ? leftSubstr : rightSubstr;
  }
  return s;
};

console.log(longestNiceSubstring('YazaAay'));
// Input: s = "YazaAay"
// Output: "aAa"
// Explanation: "aAa" is a nice string because 'A/a' is the only letter of the alphabet in s, and both 'A' and 'a' appear.
// "aAa" is the longest nice substring.
