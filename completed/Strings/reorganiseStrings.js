/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
  // O(N + NLogN) | O(N + N)
  let map = {};

  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }

  let sortedArr = Object.keys(map).sort((a, b) => map[b] - map[a]);

  let res = [];
  let index = 0;
  for (let i = 0; i < sortedArr.length; i++) {
    let occur = map[sortedArr[i]];
    if (occur > (s.length + 1) / 2) return '';
    for (let j = 0; j < occur; j++) {
      if (index >= s.length) index = 1;
      res[index] = sortedArr[i];
      index += 2;
    }
  }
  return res.join('');
};
console.log(reorganizeString('baaba'));
