/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // O(N^2) | O(N)
  if (s.length === 1) return s;

  let maxLen = 0;
  let longestStr = '';

  for (let i = 0; i < s.length; i++) {
    let j = s.length - 1;
    while (j >= i) {
      if (s[i] === s[j]) {
        let subStr = s.substring(i, j + 1);
        let currSubStrLen = palindromeChecker(subStr);

        if (maxLen < currSubStrLen) {
          maxLen = currSubStrLen;
          longestStr = subStr;
          break;
        } else j--;
      } else {
        j--;
      }
    }
  }
  return longestStr;
};

const palindromeChecker = (str) => {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return 0;
    left++;
    right--;
  }
  return str.length;
};

console.log(longestPalindromicSubstring('ab12365456321bb'));
// output : b12365456321b
