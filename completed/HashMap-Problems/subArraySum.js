/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// return the total number of continuous subarrays whose sum equals to k.
var subarraySum = function (nums, k) {
  let seen = new Map();
  let sum = 0;
  let count = 0;
  
  seen.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum === k || seen.has(sum - k)) {
      count += seen.get(sum - k) || 1;
    }
    seen.set(sum, (seen.get(sum) || 0) + 1);
  }

  return count;
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
