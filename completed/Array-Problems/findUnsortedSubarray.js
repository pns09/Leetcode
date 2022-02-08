/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let left = nums.length - 1;
  let right = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        right = Math.max(right, left);
        left = Math.min(left, i);
      }
    }
  }
  return right - 1 < 0 ? 0 : right - 1 + 1;
};


console.log()