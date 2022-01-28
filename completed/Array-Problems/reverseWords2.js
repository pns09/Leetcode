/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function (s) {
  if (s.length === 1) return s;

  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      reverseHelper(s, j, i - 1);
      j = i + 1;
    }
  }
  reverseHelper(s, j, s.length - 1);
  return reverseHelper(s, 0, s.length - 1);
};

const reverseHelper = (s, left, right) => {
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
};

console.log(reverseWords(['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']));
// Input: s = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
// Output: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]
