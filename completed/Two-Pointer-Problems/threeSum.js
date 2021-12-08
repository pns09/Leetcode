/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let p1 = i + 1;
    let p2 = nums.length - 1;
    let sum = 0;
    if (nums[i - 1] != nums[i]) {
      while (p1 < p2) {
        sum = nums[i] + nums[p1] + nums[p2];
        if (sum < 0) {
          p1++;
        } else if (sum > 0) {
          p2--;
        } else {
          res.push([nums[i], nums[p1], nums[p2]]);
          p1++;
          p2--;
          while (p1 < p2 && nums[p1] == nums[p1 - 1]) {
            p1++;
          }
        //   same thing we did for p1 should be done to p2 to not check same number twice
        //   while (p1 < p2) {
        //     if (nums[p1 - 1] == nums[p1]) p1++;
        //     else if (nums[p2 + 1] == nums[p2]) p2--;
        //     else break;
        //   }
        }
      }
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
