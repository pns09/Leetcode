function birthday(s, d, m) {
  // Write your code here
  let mSlicedCount = 0;
  let currentSum = 0;
  let ways = 0;
  let i = 0;

  while (i < s.length) {
    currentSum += s[i];
    mSlicedCount++;
    i++;
    if (mSlicedCount == m) {
      mSlicedCount--;
      if (currentSum == d) {
        ways++;
      }
      currentSum -= s[i - m];
    }
  }

  return ways;
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2));
