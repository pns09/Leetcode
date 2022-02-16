/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // kadane's algo - DP approach
  if (nums.length === 1) return nums[0];

  let sum = 0;
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max = Math.max(sum, max);
    sum = Math.max(sum, 0);
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
