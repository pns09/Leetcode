/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // O(logN) | O(1)
  if (x < 2) return x;

  let left = 1;
  let right = x;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    let product = mid * mid;

    if (product === x) return mid;
    else if (product > x) {
      right = mid;
    } else left = mid + 1;
  }

  return left - 1;
};

console.log(mySqrt(3));

// output : 1

// input: 4
// output: 2
