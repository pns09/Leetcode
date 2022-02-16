/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  //  O(N) | O(1)
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
};
console.log(reverseString(['h', 'e', 'l', 'l', 'o']));

// My solution in year - 2020
var reverseString = function (s) {
  let copyArr = [...s];
  for (let i = 0; i < copyArr.length; i++) {
    let str = s.splice(i, 1);
    s.unshift(...str);
  }
  return s;
};
