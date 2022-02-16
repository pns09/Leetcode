/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  if (nums.length < 2) return 0;
  let minSum = Infinity;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let p1 = i + 1;
    let p2 = nums.length - 1;
    let sum = 0;

    if (nums[i - 1] !== nums[i]) {
      while (p1 < p2) {
        sum = nums[i] + nums[p1] + nums[p2];
        if (Math.abs(target - sum) < Math.abs(minSum)) {
          minSum = target - sum;
        } else if (sum < target) {
          p1++;
        } else {
          p2--;
        }
      }
    }
  }
  return target - minSum;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
