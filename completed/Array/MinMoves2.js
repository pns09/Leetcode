/**
 * @param {number[]} nums
 * @return {number}
 */
// This is a Quick-Select method problem - quick-select method is similar to quick-sort method.
// Quick-Select makes use of two functions partition and select. 
// select function takes the leftmost and the rightmost indices of the given array and the central index as well. 
// If the element reaching the correct position in the current function call to 
// select function happens to be the median(i.e. it reaches the central position), 
// we return the element(since it is the median).
//  The function partitionpartition takes the leftmost and the rightmost indices of the array 
// and returns the correct position of the current pivot(which is chosen as the rightmost element of the array). 
// This function makes use of two pointers ii and jj. Both the pointers initially point to the leftmost element of the array.

var minMoves2 = function (nums) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    sum += nums[right] - nums[left];
    left++;
    right--;
  }
  return sum;
};

// Below sol is better understood!!
var minMoves2 = function (nums) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  let median = Math.floor(nums.length / 2);

  for (let i = 0; i < nums.length; i++) {
    sum += Math.abs(nums[median] - nums[i]);
  }

  return sum;
};

console.log(minMoves2([1, 2, 3]));

// Input: nums = [1,2,3]
// Output: 2
// Explanation:
// Only two moves are needed (remember each move increments or decrements one element):
// [1,2,3]  =>  [2,2,3]  =>  [2,2,2]
