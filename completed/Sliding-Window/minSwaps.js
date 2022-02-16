/**
 * @param {number[]} data
 * @return {number}
 */
var minSwaps = function (data) {
  let oneCount = 0;
  let minSwaps = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i] === 1) oneCount++;
  }

  for (let i = 0; i < oneCount; i++) {
    if (data[i] === 0) minSwaps++;
  }

  let swap = minSwaps;

  let left = 0;
  for (let right = oneCount; right < data.length; right++) {
    if (data[left] === 0) swap--;
    if (data[right] === 0) swap++;
    left++;
    minSwaps = Math.min(swap, minSwaps);
  }

  return minSwaps;
};

console.log(minSwaps([1, 0, 1, 0, 1]));

// Input: data = [1,0,1,0,1]
// Output: 1
// Explanation: There are 3 ways to group all 1's together:
// [1,1,1,0,0] using 1 swap.
// [0,1,1,1,0] using 2 swaps.
// [0,0,1,1,1] using 1 swap.
// The minimum is 1.
