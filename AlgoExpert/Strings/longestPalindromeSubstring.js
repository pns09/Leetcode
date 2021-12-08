function longestPalindromicSubstring(string) {
  // Write your code here.
  //   O(n^2) time | O(n) space
  let longestStr = 0;
  let maxLength = 0;
  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];
    let j = string.length - 1;
    while (j > i) {
      if (string[j] == currentChar) {
        let stringToCheck = string.substring(i, j + 1);
        let currentStrLength = palindromeChecker(stringToCheck);
        // if(stringToCheck.length === string.length) return string;
        if (maxLength < currentStrLength) {
          maxLength = currentStrLength;
          longestStr = stringToCheck;
          break;
        } else j--;
      } else j--;
    }
  }
  return longestStr;
}

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
