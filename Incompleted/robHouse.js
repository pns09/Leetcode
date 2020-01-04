var rob = function(nums) {
  if (nums.length <= 2) {
    if (nums[0] > nums[1]) return nums[0];
    else return nums[1];
  }
  for (let i = 0; i < nums.length; i++) {
    nums.splice(i + 1, 1);
  }
  return nums.reduce((a, b) => a + b, 0);
};
console.log(rob([1,2,3,1]));
