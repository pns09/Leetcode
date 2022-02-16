/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
  // O (N) | O(N)
  let map = {};

  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }

  let freq = Object.values(map);
  const visited = new Set();
  let res = 0;

  for (let i = 0; i < freq.length; i++) {
    let cur = freq[i];
    while (visited.has(cur)) {
      cur--;
      res++;
    }
    if (cur !== 0) visited.add(cur);
  }

  return res;
};

console.log(minDeletions('ceabaacb'));

// Input: s = "ceabaacb"
// Output: 2
// Explanation: You can delete both 'c's resulting in the good string "eabaab".
// Note that we only care about characters that are still in the string at the end (i.e. frequency of 0 is ignored).‰
