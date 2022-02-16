const checkPalindromeIndex = (s) => {
  let p1 = 0;
  let p2 = s.length - 1;

  while (p1 < p2) {
    if (s[p1] != s[p2]) {
      return false;
    }
    p1++;
    p2--;
  }
  return true;
};

function palindromeIndex(s) {
  // Write your code here
  let p1 = 0;
  let p2 = s.length - 1;

  while (p1 < p2) {
    if (s[p1] != s[p2]) {
      let subStr = s.substring(p1 + 1, p2 + 1);
      if (checkPalindromeIndex(subStr)) {
        return p1;
      } else {
        return p2;
      }
    }
    p1++;
    p2--;
  }
  return -1;
}

console.log(palindromeIndex('aaab'));
