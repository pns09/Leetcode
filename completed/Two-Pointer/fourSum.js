/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  // O(nlogn + n^3) | O(logn)
  let res = [];
  if (nums.length < 4) return res;

  nums.sort((a, b) => a - b);

  let uniqueMap = {};

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let p1 = j + 1;
      let p2 = nums.length - 1;
      let sum = 0;

      while (p1 < p2) {
        sum = nums[i] + nums[j] + nums[p1] + nums[p2];
        if (sum === target) {
          let sumStr = `${nums[i]}${nums[j]}${nums[p1]}${nums[p2]}`;
          if (!uniqueMap[sumStr]) {
            uniqueMap[sumStr] = sumStr;
            res.push([nums[i], nums[j], nums[p1], nums[p2]]);
          }
          p1++;
          p2--;
        }
        if (sum < target) {
          p1++;
        } else if (sum > target) {
          p2--;
        }
      }
    }
  }
  return res;
};

console.log(fourSum((nums = [1, 0, -1, 0, -2, 2]), (target = 0)));
