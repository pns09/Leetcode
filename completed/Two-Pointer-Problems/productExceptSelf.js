/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // O(n) | O(n)
  let left = Array(nums.length).fill(0);
  left[0] = 1;
  let right = Array(nums.length).fill(0);
  right[right.length - 1] = 1;

  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  for (let i = right.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = left[i] * right[i];
  }
  return nums;
};

console.log(productExceptSelf([1, 2, 3, 4]));
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// By using division.
// Time complexity : O(2n) => O(n)
const util = function (output, nums) {
  for (let i = 1; i < nums.length; i++) {
    output.push(output[0] / nums[i]);
  }
  return output;
};

var productExceptSelf = function (nums) {
  let output = [];
  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    product = product * nums[i];
    output[0] = product;
  }
  return util(output, nums);
};

// console.log(productExceptSelf([1, 2, 3, 4]));
