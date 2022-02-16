/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// 1 - Divide and Conquer - using map and two pointer
var longestSubstring = function (s, k) {
  // O(N^2) | O(N)
  return helper(s.split(''), 0, s.length, k);
};

const helper = (arr, start, end, k) => {
  if (end - start < k) return 0;

  let freq = {};
  for (let i = start; i < end; i++) {
    freq[arr[i]] = (freq[arr[i]] || 0) + 1;
  }

  for (let i = start; i < end; i++) {
    if (freq[arr[i]] < k) {
      let j = i + 1;

      while (j < end && freq[arr[j]] < k) { // move pointer if freq at a char is less than k
        j++;
      }

      return Math.max(helper(arr, start, i, k), helper(arr, j, end, k));
    }
  }
  return end - start;
};
console.log(longestSubstring((s = 'ababbc'), (k = 2)));
// Output: 5
// Explanation: The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.

// 2 - using arrays and two pointer approach
var longestSubstring = function (s, k) {
  return helper(s.split(''), 0, s.length, k);
};

const helper = (arr, start, end, k) => {
  if (end - start < k) return 0;

  let freq = Array(26).fill(0);
  for (let i = start; i < end; i++) {
    freq[arr[i].charCodeAt() - 'a'.charCodeAt()]++;
  }

  for (let i = start; i < end; i++) {
    if (freq[arr[i].charCodeAt() - 'a'.charCodeAt()] < k) {
      let j = i + 1;

      while (j < end && freq[arr[j].charCodeAt() - 'a'.charCodeAt()] < k) {
        j++;
      }

      return Math.max(helper(arr, start, i, k), helper(arr, j, end, k));
    }
  }
  return end - start;
};
