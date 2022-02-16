/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let n = nums.length;

  let left = Array(n).fill(0);
  left[0] = nums[0];
  for (let i = 1; i < n; i++) {
    if (i % k === 0) left[i] = nums[i];
    else left[i] = Math.max(left[i - 1], nums[i]);
  }

  let right = Array(n).fill(0);
  right[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    if (i % k === 0) right[i] = nums[i];
    else right[i] = Math.max(right[i + 1], nums[i]);
  }

  let window = n - k + 1;
  let output = Array(window).fill(0);
  for (let i = 0; i < output.length; i++) {
    output[i] = Math.max(right[i], left[i + k - 1]);
  }

  return output;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], (k = 3)));
