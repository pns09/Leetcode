/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const dfs = (s, left, right) => {
    if (left > right) return 0;
    if (left === right) return 1;
    if (s[left] === s[right]) {
      return 2 + dfs(s, left + 1, right - 1);
    } else {
      let leftIncrement = dfs(s, left + 1, right);
      let rightDecrement = dfs(s, left, right - 1);
      return Math.max(leftIncrement, rightDecrement);
    }
  };

  return dfs(s, 0, s.length - 1);
};

console.log(longestPalindromeSubseq('bbbab'));

// Input: s = "bbbab"
// Output: 4
// Explanation: One possible longest palindromic subsequence is "bbbb".
