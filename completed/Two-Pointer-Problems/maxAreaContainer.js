/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0;
  let p1 = 0;
  let p2 = height.length - 1;

  while (p1 < p2) {
    let currentArea = Math.min(height[p1], height[p2]) * (p2 - p1);
    maxArea = Math.max(maxArea, currentArea);

    if (height[p2] > height[p1]) {
      p1++;
    } else p2--;
    // same condition - written different.
    // if (height[p1] <= height[p2]) {
    //   p1++;
    // } else p2--;
  }

  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// [1,1]
// [4,3,2,1,4]
// [1,2,1]
