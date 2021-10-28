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
