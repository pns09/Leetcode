/**
 * @param {number[]} nums
 * @return {number}
 */
//  Given the sorted rotated array nums that may contain duplicates, return the minimum element of this array.
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    while (left < right && nums[left] === nums[right]) left++;

    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
};
console.log(findMin([2, 2, 2, 0, 1]));
// Input: nums = [2, 2, 2, 0, 1];
// Output: 0;
