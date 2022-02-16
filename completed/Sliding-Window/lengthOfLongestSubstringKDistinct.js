/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function (s, k) {
  if (k === 0) return 0;

  let left = 0;
  let right = 0;
  let map = {};
  let maxlen = 1;

  while (right < s.length) {
    map[s[right]] = (map[s[right]] || 0) + 1;
    right++;
    while (Object.keys(map).length > k) {
      if (map[s[left]] > 1) {
        map[s[left]]--;
      } else delete map[s[left]];
      left++;
    }
    maxlen = Math.max(maxlen, right - left);
  }
  return maxlen;
};

console.log(lengthOfLongestSubstringKDistinct('aaaaaaaabaaaaaaaaaaaaaaaaaaa', 1));
// output : 19

//1
// Input: s = "eceba", k = 2
// Output: 3
// Explanation: The substring is "ece" with length 3.
