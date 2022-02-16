/**
 * @param {number[]} nums
 * @return {number}
 */
//1
var partitionDisjoint = function (nums) {
  // O(n) | O(1)
  let maxLeft = nums[0];
  let maxSoFar = nums[0];
  let len = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < maxLeft) {
      len = i + 1;
      maxLeft = maxSoFar;
    } else {
      maxSoFar = Math.max(nums[i], maxSoFar);
    }
  }
  return len;
};

console.log(partitionDisjoint([5, 0, 3, 8, 6]));
// Input: nums = [5,0,3,8,6]
// Output: 3
// Explanation: left = [5,0,3], right = [8,6]

// 2 - using 2 arrays
var partitionDisjoint = function (nums) {
  // O(n) | O(n)
  let leftMax = [];
  leftMax[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], nums[i]);
  }

  let rightMin = [];
  rightMin[nums.length - 1] = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    rightMin[i] = Math.min(rightMin[i + 1], nums[i]);
  }

  for (let i = 1; i < nums.length; i++) {
    if (leftMax[i - 1] <= rightMin[i]) {
      return i;
    }
  }
  return nums.length - 1;
};

//2 - brute force
var partitionDisjoint = function (nums) {
  // O(n^2) | O(1)
  let leftMax = 0;

  for (let i = 0; i < nums.length; i++) {
    leftMax = Math.max(nums[i], leftMax);
    let rightMin = Infinity;
    for (let j = i + 1; j < nums.length; j++) {
      rightMin = Math.min(rightMin, nums[j]);
    }
    if (leftMax <= rightMin) {
      return i + 1;
    }
  }
  return nums.length;
};
