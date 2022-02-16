/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // O(N) | O(N)
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let canRob = [];
  canRob[0] = nums[0];
  canRob[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    canRob[i] = Math.max(canRob[i - 1], canRob[i - 2] + nums[i]);
  }

  return canRob[canRob.length - 1];
};

console.log(rob([2, 1, 1, 2]));
// output: 4
