/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let commonPrefixStr = '';
  if (strs.length < 2) {
    return (commonPrefixStr = strs[0]);
  }

  for (let i = 0; i < strs[0].length; i++) {
    let currentChar = strs[0].charAt(i);

    let j = 1;
    while (j < strs.length) {
      if (strs[j].charAt(i) !== currentChar) {
        return commonPrefixStr;
      }
      j++;
    }
    commonPrefixStr += strs[0].charAt(i);
  }
  return commonPrefixStr;
};

console.log(longestCommonPrefix(['', '']));

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Google answer for the same, this works!
// var longestCommonPrefix = function(strs) {
if (strs.length === 0) return '';
if (strs.length === 1) return strs.toString();
if (strs.length >= 2) {
  var arr = strs.concat().sort(),
    a1 = arr[0],
    a2 = arr[arr.length - 1],
    L = a1.length,
    i = 0;
  while (i < L && a1.charAt(i) === a2.charAt(i)) i++;
  return a1.substring(0, i);
}
// console.log(longestCommonPrefix(["flo", "flower", "flight"]));

// Optimized solution
// var longestCommonPrefix = function(strs) {
//     if (strs.length === 0) return '';
//     let r = '';
//     for (let i = 0; i < strs[0].length; i++) {
//       for (let j = 1; j < strs.length; j++) {
//         if (strs[0][i] !== strs[j][i]) return r;
//       }
//       r += strs[0][i];
//     }
//     return r;
//   };
