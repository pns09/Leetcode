/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  // O(log (N - k)) | O(N) - Binary Search approach

  let left = 0;
  let right = arr.length - k;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (x - arr[mid] > arr[mid + k] - x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  let res = [];
  for (let i = left; i < left + k; i++) {
    res.push(arr[i]);
  }

  return res;
};

console.log(findClosestElements([1, 2, 3, 4, 5], (k = 4), (x = 3)));
// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]
