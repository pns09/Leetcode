function maxSlidingWindow(nums, k) {
  let n = nums.length;
  if (n * k == 0) return new int[0]();
  if (k == 1) return nums;

  let left = Array(n).fill(0);
  left[0] = nums[0];
  let right = Array(n).fill(0);
  right[n - 1] = nums[n - 1];

  for (let i = 1; i < n; i++) {
    // from left to right
    if (i % k == 0) left[i] = nums[i];
    // block_start
    else left[i] = Math.max(left[i - 1], nums[i]);

    // from right to left
    let j = n - i - 1;
    if ((j + 1) % k == 0) right[j] = nums[j];
    // block_end
    else right[j] = Math.max(right[j + 1], nums[j]);
  }

  let output = Array(n - k + 1).fill(0);
  for (let i = 0; i < n - k + 1; i++) output[i] = Math.max(left[i + k - 1], right[i]);

  return output;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], (k = 3)));
