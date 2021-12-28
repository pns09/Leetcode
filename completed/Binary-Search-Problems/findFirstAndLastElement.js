/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let firstOccurence = findElement(nums, target, true);

  if (firstOccurence === undefined) {
    return [-1, -1];
  }

  let lastOccurence = findElement(nums, target, false);

  return [firstOccurence, lastOccurence];
};

const findElement = (nums, target, isFirst) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      if (isFirst) {
        if (mid == left || nums[mid - 1] != target) {
          return mid;
        }
        right = mid - 1;
      } else {
        if (mid == right || nums[mid + 1] != target) {
          return mid;
        }
        left = mid + 1;
      }
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
};

console.log(searchRange([1], (target = 1)));
// output: [0,0]

// Input: (nums = [5, 7, 7, 8, 8, 10]), (target = 8);
// Output: [3, 4];
