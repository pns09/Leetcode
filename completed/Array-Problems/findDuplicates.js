/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = (nums) => {
  let obj = {};
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      res.push(nums[i]);
    } else;
    obj[nums[i]] = 1;
  }

  return res;
};

console.log(findDuplicates([4, 3, 2, 7, 2, 1, 3, 6]));
