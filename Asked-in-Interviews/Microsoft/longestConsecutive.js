const longestConsecutive = (nums) => {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = true;
  }

  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (map[num - 1] === undefined) {
      let count = 0;
      while (map[num] !== undefined) {
        count++;
        num++;
      }
      max = Math.max(count, max);
    }
  }
  return max;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
