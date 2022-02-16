/**
 * @param {number[]} nums
 * @return {number}
 */
// Brute Force
var findMaxConsecutiveOnes = function (nums) {
  let longest = 0;
  for (let i = 0; i < nums.length; i++) {
    let numZeros = 0;

    for (let j = i; j < nums.length; j++) {
      if (nums[j] === 0) {
        numZeros++;
      }

      if (numZeros <= 1) {
        longest = Math.max(longest, j - i + 1);
      }
      if (numZeros > 1) break;
    }
  }
  return longest;
};

console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0]));

// Output: 4
// Explanation: Flip the first zero will get the maximum number of consecutive 1s. After flipping, the maximum number of consecutive 1s is 4.
