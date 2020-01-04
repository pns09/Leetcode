var maxSubArray = function(nums) {
  var arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]> 0) {
      arr.push(nums[i]);
    }
  } 
  return arr;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))