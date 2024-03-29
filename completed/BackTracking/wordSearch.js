function findWord(matrix, word) {
  if (matrix.length === 0 && word.length === 0) return false;
  let rows = matrix.length;
  let cols = matrix[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (backtrack(matrix, row, col, word, 0)) {
        return true;
      }
    }
  }
  return false;
}

const backtrack = (matrix, row, col, word, index) => {
  if (index >= word.length) return true;

  if (row < 0 || col < 0 || row >= matrix.length || col > matrix[0].length) {
    return false;
  }
  if (matrix[row][col] !== word.charAt(index)) {
    return false;
  }

  let char = matrix[row][col];
  matrix[row][col] = '#';

  let res =
    backtrack(matrix, row - 1, col, word, index + 1) ||
    backtrack(matrix, row + 1, col, word, index + 1) ||
    backtrack(matrix, row, col - 1, word, index + 1) ||
    backtrack(matrix, row, col + 1, word, index + 1);

  matrix[row][col] = char;
  return res;
};

console.log(
  findWord(
    [
      ['F', 'A', 'C', 'I'],
      ['O', 'B', 'Q', 'P'],
      ['A', 'N', 'O', 'B'],
      ['M', 'A', 'S', 'S'],
    ],
    'AQB'
  )
);

// 2 - variation
const dfs = (grid, i, j, word) => {
  if (word.length === 0) {
    return true;
  }
  if (i < 0 || j < 0 || i >= grid.length || j > grid[0].length || grid[i][j] !== word[0]) {
    return false;
  }

  const char = grid[i][j];
  grid[i][j] = '.';

  let res = dfs(grid, i - 1, j, word.substring(1)) || dfs(grid, i + 1, j, word.substring(1)) || dfs(grid, i, j - 1, word.substring(1)) || dfs(grid, i, j + 1, word.substring(1));

  grid[i][j] = char;
  return res;
};

var findWord = (grid, word) => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (dfs(grid, i, j, word)) {
        return true;
      }
    }
  }
  return false;
};

console.log(
  findWord(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCB'
  )
);
