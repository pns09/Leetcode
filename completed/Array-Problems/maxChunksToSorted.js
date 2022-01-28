/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  let max = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    max = Math.max(arr[i], max);

    if (i === max) count++;
  }

  return count;
};

console.log(maxChunksToSorted([1, 0, 2, 3, 4]));

// Input: arr = [1,0,2,3,4]
// Output: 4
// Explanation:
// We can split into two chunks, such as [1, 0], [2, 3, 4].
// However, splitting into [1, 0], [2], [3], [4] is the highest number of chunks possible.
