/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let permutations = [];
  permutationsHelper(0, nums, permutations);
  return permutations;
};

function permutationsHelper(i, nums, permutations) {
  if (i === nums.length - 1) {
    permutations.push(nums.slice());
  } else {
    for (let j = i; j < nums.length; j++) {
      swap(i, j, nums);
      permutationsHelper(i + 1, nums, permutations);
      swap(i, j, nums);
    }
  }
}

function swap(i, j, arr) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
