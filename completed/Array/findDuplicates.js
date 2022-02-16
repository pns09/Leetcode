/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// You must solve the problem without modifying the array nums
// and uses only constant extra space.
var findDuplicate = function (nums) {
  // O(N) | O(1)
  while (nums[0] != nums[nums[0]]) {
    let temp = nums[nums[0]];
    nums[nums[0]] = nums[0];
    nums[0] = temp;
  }
  return nums[0];
};
console.log(findDuplicate([1, 3, 4, 2, 2]))
// Input: nums = [1,3,4,2,2]
// Output: 2

// To illustrate the algorithm, let's consider an example [3,3,5,4,1,3][3,3,5,4,1,3]:
// [3, 3, 5, 4, 1, 3]; // Compare nums[0] to nums[nums[0]] (i.e. nums[0] to nums[3]). 33 != 44. Swap them. Now the first 33 will be swapped into its correct position, and position 0 has 44.
// [4, 3, 5, 3, 1, 3]; // Compare nums[0] to nums[4]. 4 != 1. Not equal, so swap again. Now 4 is in its correct position.
// [1, 3, 5, 3, 4, 3]; // Compare nums[0] with nums[1]. Not equal, swap.
// [3, 1, 5, 3, 4, 3]; // Now nums[0] == nums[3] (both are 3). That's it! 3 is in both positions 0 and position 3, so it's the duplicate.

// Using extra space
var findDuplicate = function (nums) {
  // O(N) | O(N)
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return nums[i];
    } else {
      map[nums[i]] = true;
    }
  }
};

console.log(findDuplicate([4, 3, 2, 7, 2, 1, 3, 6]));
