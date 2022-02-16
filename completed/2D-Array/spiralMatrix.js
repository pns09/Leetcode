var spiralOrder = function (matrix) {
  let initialRow = 0;
  let initialCol = 0;
  let lastRow = matrix.length - 1;
  let lastCol = matrix[0].length - 1;
  let res = [];

  while (initialRow <= lastRow && initialCol <= lastCol) {
    for (let col = initialRow; col <= lastCol; col++) {
      res.push(matrix[initialRow][col]);
    }
    for (let row = initialRow + 1; row <= lastRow; row++) {
      res.push(matrix[row][lastCol]);
    }
    for (let col = lastCol - 1; col >= initialCol; col--) {
      if (initialRow === lastRow) break;
      res.push(matrix[lastRow][col]);
    }
    for (let row = lastRow - 1; row > initialRow; row--) {
      if (initialCol === lastCol) break;
      res.push(matrix[row][initialCol]);
    }
    initialRow++;
    initialCol++;
    lastRow--;
    lastCol--;
  }
  return res;
};

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);

// output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7];
