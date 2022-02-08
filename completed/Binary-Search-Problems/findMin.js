/**
 * @param {number[]} nums
 * @return {number}
 */
//  Given the sorted rotated array nums of unique elements, return the minimum element of this array
var findMin = function (nums) {
  // return Math.min(...nums);
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
};

console.log(findMin([3, 4, 5, 1, 2]));

// Input: nums = [3,4,5,1,2]
// Output: 1
