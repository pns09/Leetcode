/**
 * @param {character[][]} board
 * @return {number}
 */
// check adjacent values as Battleships can only be placed horizontally or vertically on board
var countBattleships = function (board) {
  let count = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '.') {
        continue;
      }
      if (i > 0 && board[i - 1][j] === 'X') {
        continue;
      }
      if (j > 0 && board[i][j - 1] === 'X') {
        continue;
      }
      count++;
    }
  }

  return count;
};

// using recursion - checking the matrix and sinking the X
var countBattleships = function (board) {
  let count = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'X') {
        count++;
        checkAdjacent(board, i, j);
      }
    }
  }
  return count;
};

const checkAdjacent = (board, i, j) => {
  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== 'X') {
    return;
  }

  board[i][j] = '.';
  checkAdjacent(board, i - 1, j);
  checkAdjacent(board, i + 1, j);
  checkAdjacent(board, i, j - 1);
  checkAdjacent(board, i, j + 1);
};
