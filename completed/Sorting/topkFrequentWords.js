/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  // O(N logN) | O(N)
  let map = {};

  for (let i = 0; i < words.length; i++) {
    map[words[i]] = (map[words[i]] || 0) + 1;
  }

  let res = Object.entries(map);

  res.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] > b[0] ? 1 : -1;
    }
    return b[1] - a[1];
  });

  return res.slice(0, k).map((word) => word[0]);
};

console.log(topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], (k = 2)));

// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.
