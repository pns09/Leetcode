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

console.log(lengthOfLongestSubstring('pwwkew'));

// output : 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.