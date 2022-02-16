// Two-pointer approach solution after understanding concept
var lengthOfLongestSubstring = function (s) {
  let mapObj = {};
  let left = 0;
  let right = 0;
  let maxlength = 0;

  while (right < s.length) {
    if (!mapObj[s[right]]) {
      mapObj[s[right]] = s[right];
      maxlength = Math.max(maxlength, Object.keys(mapObj).length);
      right++;
    } else {
      delete mapObj[s[left]];
      left++;
    }
  }
  return maxlength;
};

console.log(lengthOfLongestSubstring('abcabcbb'));

// My initial approach solution.
// var lengthOfLongestSubstring = function (s) {
//   let substr = '';
//   maxlength = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (substr.includes(s[i])) {
//       maxlength = Math.max(maxlength, substr.length);
//       substr = s[i];
//     } else {
//       substr += s[i];
//     }
//   }
//   return Math.max(maxlength, substr.length);
// };

// console.log(lengthOfLongestSubstring('dvdf'));
