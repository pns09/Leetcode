/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    let sortedString = strs[i].split('').sort().join('');
    if (map[sortedString]) {
      map[sortedString].push(strs[i]);
    } else {
      map[sortedString] = [strs[i]];
    }
  }
  return Object.values(map);
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// output: [["eat","tea","ate"],["tan","nat"],["bat"]]
