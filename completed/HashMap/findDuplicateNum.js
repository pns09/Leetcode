// My solution using map object.
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return nums[i];
    } else {
      map[nums[i]] = (map[nums[i]] || 0) + 1;
    }
  }
};
console.log(findDuplicate([1, 3, 4, 2, 2]));
// output : 2

// My solution #2 - sort is O(nlogn) not very efficient.
var findDuplicate = function (nums) {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      return nums[i];
    }
  }
};
