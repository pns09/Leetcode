/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 1 - For below solution to work - matrix needs to be sorted in asccending order in both rows and cols
var searchMatrix = function (matrix, target) {
  // O(N) | O(1)
  let row = 0;
  let col = matrix[0].length - 1;

  while (row <= matrix.length - 1 && col >= 0) {
    if (matrix[row][col] > target) {
      col--;
    } else if (matrix[row][col] < target) {
      row++;
    } else {
      return true;
    }
  }
  return false;
};

// 2
var searchMatrix = function (matrix, target) {
  // O(N logN) | O(1)
  for (let i = 0; i < matrix.length; i++) {
    let currRow = matrix[i];

    let left = 0;
    let right = currRow.length;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);

      if (currRow[mid] === target) return true;
      if (currRow[left] === target) return true;
      if (currRow[right] === target) return true;

      if (currRow[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return false;
};
console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    (target = 5)
  )
);
// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
// Output: true
