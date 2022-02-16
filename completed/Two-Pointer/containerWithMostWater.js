/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // rectangle area = l x b;
  // O(N) | O(1)

  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    // Area = length of shorter vertical line * distance between lines
    let area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);
    if (height[left] < height[right]) {
      left++;
    } else right--;
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// [1,1]
// [4,3,2,1,4]
// [1,2,1]
