/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    sum += nums[right] - nums[left];
    left++;
    right--;
  }
  return sum;
};

// Below sol is better understood!!
var minMoves2 = function (nums) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  let median = Math.floor(nums.length / 2);

  for (let i = 0; i < nums.length; i++) {
    sum += Math.abs(nums[median] - nums[i]);
  }

  return sum;
};

console.log(minMoves2([1, 2, 3]));

// Input: nums = [1,2,3]
// Output: 2
// Explanation:
// Only two moves are needed (remember each move increments or decrements one element):
// [1,2,3]  =>  [2,2,3]  =>  [2,2,2]
