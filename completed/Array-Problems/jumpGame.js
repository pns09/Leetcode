/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let lastIndex = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    // form the last index check to see if you can again go to last index by doing below math
    // index + the value of item at that index should be greater than the lastIndex (because we want to reach end)
    if (i + nums[i] >= lastIndex) {
      lastIndex = i;
    }
  }

  //if lastIndex is 0 then you can reach which is true else return false;
  return lastIndex === 0;
};

console.log(canJump([2, 3, 1, 1, 4]));
// output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
