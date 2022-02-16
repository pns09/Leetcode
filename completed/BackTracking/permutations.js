/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// My Solution
var permute = function (nums) {
  let res = [];
  let temp = [];
  backtrack(nums, 0, res, temp);
  return res;
};

const backtrack = (nums, index, res, temp) => {
  if (temp.length === nums.length) {
    res.push(temp.slice());
    return;
  } else {
    for (let i = index; i < nums.length; i++) {
      temp.push(nums[i]);
      swap(index, i, nums);
      backtrack(nums, index + 1, res, temp);
      swap(index, i, nums);
      temp.pop();
    }
  }
};

const swap = (i, j, arr) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

console.log(premute((nums = [1, 2, 3])));
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Leetcode Solution
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
