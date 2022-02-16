/**
 * @param {number[]} nums
 * @return {number}
 */
// using HashMap
var longestConsecutive = function (nums) {
  // O(n) | O(n)
  let max = 0;
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = true;
  }

  for (let key in map) {
    let currentKey = parseInt(key);

    if (map[currentKey - 1] === undefined) {
      let sequence = 0;
      while (map[currentKey] !== undefined) {
        sequence++;
        currentKey++;
      }
      max = Math.max(max, sequence);
    }
  }
  return max;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

// output: 4

// Using Sorting technique
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // O(nlogn) | O(n)
  if (nums.length === 0) return 0;
  nums.sort((a, b) => a - b);

  let longestSequence = 1;
  let currentCount = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      if (nums[i - 1] + 1 === nums[i]) {
        currentCount++;
      } else {
        longestSequence = Math.max(longestSequence, currentCount);
        currentCount = 1;
      }
    }
  }
  return Math.max(longestSequence, currentCount);
};
