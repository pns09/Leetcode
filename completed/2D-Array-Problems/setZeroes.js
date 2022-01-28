/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let zeros = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        zeros.push([i, j]);
      }
    }
  }

  while (zeros.length > 0) {
    let [row, col] = zeros.pop();

    // top to bottom
    for (let rows = 0; rows < matrix.length; rows++) {
      matrix[rows][col] = 0;
    }

    //left to right
    for (let cols = 0; cols < matrix[0].length; cols++) {
      matrix[row][cols] = 0;
    }
  }
};

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
