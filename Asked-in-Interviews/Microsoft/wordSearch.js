function findWord(matrix, word) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (dfs(matrix, i, j, word, 0)) {
        return true;
      }
    }
  }
  return false;
}

const dfs = (matrix, i, j, word, index) => {
  if (index >= word.length) return true;

  if (i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length) {
    return false;
  }

  if (matrix[i][j] !== word[index]) return false;

  let char = matrix[i][j];
  matrix[i][j] = '#';

  let res = dfs(matrix, i - 1, j, word, index + 1) || dfs(matrix, i + 1, j, word, index + 1) || dfs(matrix, i, j - 1, word, index + 1) || dfs(matrix, i, j + 1, word, index + 1);

  matrix[i][j] = char;
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
    'MASS'
  )
);
