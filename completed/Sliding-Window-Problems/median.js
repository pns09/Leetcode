const median = (arr, k) => {
  let p1 = 0;
  let p2 = 0;
  let subArr = [];
  let result = [];

  while (p2 < arr.length - 1) {
    subArr.push(arr[p1]);
    p1++;
    if (subArr.length === k) {
      // Median array of elements
      // When even items it is an average and when odd items it is the mid item from sorted array.
      const mid = Math.floor(subArr.length / 2),
        nums = subArr.sort((a, b) => a - b);
      subArr.length % 2 !== 0 ? result.push(nums[mid]) : result.push((nums[mid - 1] + nums[mid]) / 2);
      subArr = [];
      p2++;
      if (p1 === arr.length) return result;
      else p1 = p2;
    }
  }
};

console.log(median([1, 2, -1, 3, 5], (k = 4)));
