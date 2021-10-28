/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// sliding window pattern
var subarraySum = function (nums, k) {
  let len = nums.length;
  let count = 0;
  let pointer = 0;
  let sum = 0;

  while (pointer < len) {
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      if (sum == k) {
        count++;
      }
    }
    pointer++;
    sum = 0;
    nums.shift();
  }
  return count;
};
console.log(subarraySum((nums = [1, 2, 3]), (k = 3)));

// output: 2
