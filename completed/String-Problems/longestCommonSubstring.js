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
