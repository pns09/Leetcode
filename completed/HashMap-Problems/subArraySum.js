/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// return the total number of continuous subarrays whose sum equals to k.
var subarraySum = function (nums, k) {
  const map = new Map([[0, 1]]);
  let sum = 0;
  let total = 0;
  for (let num of nums) {
    sum = sum + num;
    total += map.get(sum - k) || 0;
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return total;
};

// Brute force
// O(n^2) | O(1)
var subarraySum = (nums, k) => {
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum > k) break;
      if (sum === k) return nums.splice(i, j);
    }
  }
};

console.log(subarraySum([1, 2, 3, 4, 5], 9));
