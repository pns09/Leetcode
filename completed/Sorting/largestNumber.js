/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  if (nums.length === 1) return '' + nums[0];

  nums.sort((first, second) => {
    var firstsecond = '' + first + second;
    var secondfirst = '' + second + first;
    return firstsecond > secondfirst ? -1 : 1;
  });

  if (parseInt(nums.join('')) === 0) return '0';
  return '' + nums.join('');
};

console.log(largestNumber([3, 30, 34, 5, 9]));
// Input: nums = [3, 30, 34, 5, 9];
// Output: '9534330';
