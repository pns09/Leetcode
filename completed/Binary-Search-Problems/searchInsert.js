/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let startIndex = 0;
  let endIndex = nums.length - 1;
  if (nums[0] > target) {
    return 0;
  }
  if (nums[endIndex] < target) {
    return endIndex + 1;
  }
  
  while (startIndex <= endIndex) {
    const middle = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (target == nums[middle]) {
      return middle;
    }
    if (target < nums[middle]) {
      endIndex = middle - 1;
    } else {
      startIndex = middle + 1;
    }
  }
  if (nums[startIndex] > target) return startIndex;
  else return endIndex + 1;
};
