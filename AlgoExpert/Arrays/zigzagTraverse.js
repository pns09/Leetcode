function zigzagTraverse(array) {
  // Write your code here.
  // O(N) | O(N)
  let row = 0;
  let col = 0;
  const endRow = array.length - 1;
  const endCol = array[0].length - 1;
  let res = [];
  let goingDown = true;

  while (!checkBoundary(row, col, endRow, endCol)) {
    res.push(array[row][col]);
    if (goingDown) {
      if (col === 0 || row === endRow) {
        goingDown = false;
        if (row === endRow) {
          col++;
        } else {
          row++;
        }
      } else {
        row++;
        col--;
      }
    } else {
      if (row === 0 || col === endCol) {
        goingDown = true;
        if (col === endCol) {
          row++;
        } else {
          col++;
        }
      } else {
        row--;
        col++;
      }
    }
  }
  return res;
}

const checkBoundary = (row, col, endRow, endCol) => {
  return row < 0 || col < 0 || row > endRow || col > endCol;
};

console.log(
  zigzagTraverse([
    [1, 3, 4, 10],
    [2, 5, 9, 11],
    [6, 8, 12, 15],
    [7, 13, 14, 16],
  ])
);

// output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
