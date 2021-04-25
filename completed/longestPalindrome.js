// For each letter, say it occurs v times. We know we have v // 2 * 2 letters that can be partnered for sure.
// For example, if we have 'aaaaa', then we could have 'aaaa' partnered, which is 5 // 2 * 2 = 4 letters partnered.

// At the end, if there was any v % 2 == 1, then that letter could have been a unique center.
// Otherwise, every letter was partnered. To perform this check, we will check for v % 2 == 1 and ans % 2 == 0,
// the latter meaning we haven't yet added a unique center to the answer.
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  if (s === s.split('').reverse().join('')) {
    return s.length;
  }
  let totalLen = 0;
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = (obj[s[i]] || 0) + 1;
    if (obj[s[i]] % 2 === 0) totalLen += 2;
  }

  return s.length > totalLen ? totalLen + 1 : totalLen;
};

console.log(longestPalindrome((s = 'abccccdd')));
// output is 7
