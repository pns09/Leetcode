// An sorted array of integers was rotated an unknown number of times.
// Given such an array, find the index of the element in the array in faster than linear time. If the element doesn't exist in the array, return null.

// You must write an algorithm with O(log n) runtime complexity.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  //  O(log n)
  if (nums.length === 0) return -1;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[left] === target) return left;
    if (nums[right] === target) return right;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > nums[left]) {
      if (nums[left] <= target && nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[right] >= target && nums[mid] < target) {
        left = mid + 1;
      } else {
        right = right - 1;
      }
    }
  }
  return -1;
}

console.log(search((nums = [1, 2, 3, 4, 5, 6]), (target = 4)));

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

//one line solution
var search = function(nums, target) {
  // O(n) - this takes O(n) because indexof will loop thru all the array elements which does not satisfy problem constraint
  return nums.indexOf(target);
};