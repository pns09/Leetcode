/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid + 1] === nums[mid]) {
      if (mid % 2 === 0) {
        left = mid + 2;
      } else {
        right = mid - 1;
      }
    } else if (nums[mid - 1] === nums[mid]) {
      if (mid % 2 === 0) {
        right = mid - 2;
      } else {
        left = mid + 1;
      }
    } else {
      return nums[mid];
    }
  }
  return nums[left];
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
// output: 2
