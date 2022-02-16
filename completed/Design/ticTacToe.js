/**
 * @param {number} n
 */
// 1
var TicTacToe = function (n) {
  this.size = n;
  this.rows = Array(n).fill(0);
  this.cols = Array(n).fill(0);
  this.diagonal = 0;
  this.antiDiagonal = 0;
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function (row, col, player) {
  let currPlayer = player === 1 ? 1 : -1;
  this.rows[row] += currPlayer;
  this.cols[col] += currPlayer;

  if (row === col) {
    this.diagonal += currPlayer;
  }

  if (col === this.size - 1 - row) {
    this.antiDiagonal += currPlayer;
  }

  if (Math.abs(this.rows[row]) === this.size || Math.abs(this.cols[col]) === this.size || Math.abs(this.diagonal) === this.size || Math.abs(this.antiDiagonal) === this.size) {
    return player;
  }

  return 0;
};
// Input :
// ["TicTacToe", "move", "move", "move", "move", "move", "move", "move"]
// [[3], [0, 0, 1], [0, 2, 2], [2, 2, 1], [1, 1, 2], [2, 0, 1], [1, 0, 2], [2, 1, 1]]
// Output :
// [null, 0, 0, 0, 0, 0, 0, 1]

// 2 - Brute force
class TicTacToe {
  constructor(n) {
    this.size = n;
    this.board = [];
    for (let i = 0; i < this.size; i++) {
      let row = new Array(this.size);
      this.board.push(row);
    }
  }

  move(row, col, player) {
    board[row][col] = player;
    // check if the player wins
    if (checkRow(row, player) || checkColumn(col, player) || (row == col && checkDiagonal(player)) || (col == this.size - row - 1 && checkAntiDiagonal(player))) {
      return player;
    }
    // No one wins
    return 0;
  }

  checkRow(row, player) {
    for (col = 0; col < this.size; col++) {
      if (board[row][col] != player) {
        return false;
      }
    }
    return true;
  }

  checkColumn(col, player) {
    for (row = 0; row < this.size; row++) {
      if (board[row][col] != player) {
        return false;
      }
    }
    return true;
  }

  checkDiagonal(player) {
    for (row = 0; row < this.size; row++) {
      if (board[row][row] != player) {
        return false;
      }
    }
    return true;
  }

  checkAntiDiagonal(player) {
    for (row = 0; row < this.size; row++) {
      if (board[row][this.size - row - 1] != player) {
        return false;
      }
    }
    return true;
  }
}
