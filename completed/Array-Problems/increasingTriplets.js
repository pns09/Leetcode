/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 1
var increasingTriplet = function (nums) {
  //O(N) | O(1)
  if (nums.length < 3) return false;

  let left = Infinity;
  let mid = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > mid) return true;

    if (nums[i] > left && nums[i] < mid) mid = nums[i];
    else if (nums[i] < left) left = nums[i];
  }
  return false;
};

console.log(increasingTriplet([5, 4, 3, 2, 1]));

//output: false;

// 2
var increasingTriplet = function (nums) {
  // O(N^3)  | O(1) - will work but will encounter TLE - time limit exceeded exception
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      for (let k = 0; k < nums.length; k++) {
        if (i < j && j < k && nums[i] < nums[j] && nums[j] < nums[k]) return true;
      }
    }
  }
  return false;
};
