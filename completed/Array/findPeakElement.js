/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (nums.length === 1) return 0;

  if (nums.length <= 3) {
    return nums.indexOf(Math.max(...nums));
  }

  let left = Array(nums.length).fill(true);
  for (let i = 0; i < nums.length; i++) {
    nums[i] < nums[i + 1] ? (left[i] = true) : (left[i] = false);
  }

  let right = Array(nums.length).fill(true);
  for (let i = nums.length - 1; i >= 0; i--) {
    nums[i] > nums[i - 1] ? (right[i] = true) : (right[i] = false);
  }

  for (let i = 0; i < left.length; i++) {
    if (!left[i] && !right[i]) return i - 1 < 0 ? 0 : i - 1;
  }

  let maxNum = Math.max(...nums);
  return nums.indexOf(maxNum);
};

console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));

// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
