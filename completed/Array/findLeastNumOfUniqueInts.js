/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  //  O(nlogn) |
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = (map[arr[i]] || 0) + 1;
  }
  let values = Object.values(map);

  values.sort((a, b) => a - b);

  let res = values.length;

  for (let i = 0; i < values.length; i++) {
    if (k >= values[i]) {
      k = k - values[i];
      res--;
    } else return res;
  }

  return res;
};

console.log(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], (k = 3)));
// Input: arr = [4,3,1,1,3,3,2], k = 3
// Output: 2
// Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.
