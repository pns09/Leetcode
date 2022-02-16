/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const value = board[i][j];
      if (value !== '.') {
        if (!checkValidRow(board, i, j, value) || !checkValidCol(board, i, j, value) || !checkValidBox(board, i, j, value)) {
          return false;
        }
      }
    }
  }
  return true;
};

const checkValidRow = (board, i, j, value) => {
  for (let col = 0; col < 9; col++) {
    if (col !== j) {
      if (board[i][col] === value) {
        return false;
      }
    }
  }
  return true;
};

const checkValidCol = (board, i, j, value) => {
  for (let row = 0; row < 9; row++) {
    if (row !== i) {
      if (board[row][j] === value) {
        return false;
      }
    }
  }
  return true;
};

const checkValidBox = (board, i, j, value) => {
  let startRow = i - (i % 3);
  let startCol = j - (j % 3);
  for (let row = startRow; row < startRow + 3; row++) {
    for (let col = startCol; col < startCol + 3; col++) {
      if (row !== i && col !== j) {
        if (board[row][col] === value) {
          return false;
        }
      }
    }
  }
  return true;
};

console.log(isValidSudoku());
