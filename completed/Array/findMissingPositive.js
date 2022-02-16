/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let n = nums.length;

  // Base case.
  let contains = 0;
  for (let i = 0; i < n; i++)
    if (nums[i] == 1) {
      contains++;
      break;
    }

  if (contains == 0) return 1;

  // Replace negative numbers, zeros,
  // and numbers larger than n by 1s.
  // After this convertion nums will contain
  // only positive numbers.
  for (let i = 0; i < n; i++) if (nums[i] <= 0 || nums[i] > n) nums[i] = 1;

  // Use index as a hash key and number sign as a presence detector.
  // For example, if nums[1] is negative that means that number `1`
  // is present in the array.
  // If nums[2] is positive - number 2 is missing.
  for (let i = 0; i < n; i++) {
    let a = Math.abs(nums[i]);
    // If you meet number a in the array - change the sign of a-th element.
    // Be careful with duplicates : do it only once.
    if (a == n) nums[0] = -Math.abs(nums[0]);
    else nums[a] = -Math.abs(nums[a]);
  }

  // Now the index of the first positive number
  // is equal to first missing positive.
  for (let i = 1; i < n; i++) {
    if (nums[i] > 0) return i;
  }

  if (nums[0] > 0) return n;

  return n + 1;
};

console.log(firstMissingPositive([3, 4, -1, 1]));
// output: 2
