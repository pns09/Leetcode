/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;
  }

  let res = Object.entries(map).sort((a, b) => (a[1] > b[1] ? -1 : 1));
  return res.slice(0, k).map((val) => parseInt(val[0]));
};
console.log(topKFrequent([1, 1, 1, 2, 2, 3], (k = 2)));
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
