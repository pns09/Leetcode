/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // O(N^3) - There are two nested loops, and substring computation at each iteration | O(N)
  if (s.length === 0 || wordDict.length === 0) return false;

  let dp = Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.indexOf(s.substring(j, i)) >= 0) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};

console.log(wordBreak('leetcode', (wordDict = ['leet', 'code'])));

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
