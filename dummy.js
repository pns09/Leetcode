var maxAscendingSum = function (nums) {
  const results = [];
  let sum = nums[0];
  if (nums.length === 1) return nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      sum += nums[i];
    } else {
      results.push(sum);
      sum = nums[i];
    }

    if (i === nums.length - 1) {
      results.push(sum);
    }
  }
  return Math.max(...results);
};

console.log(maxAscendingSum([10,20,30,5,10,50]));
