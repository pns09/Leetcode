var maxNonOverlapping = function (nums, target) {
  // O(N) | O(N)
  const seen = new Set();
  let total = 0,
    result = 0;

  for (let n of nums) {
    total += n;

    if (total === target || seen.has(total - target)) {
      total = 0;
      result++;
      seen.clear();
    } else seen.add(total);
  }
  return result;
};

console.log(maxNonOverlapping([-1, 3, 5, 1, 4, 2, -9], (target = 6)));
