/**
 * @param {number[][]} matrix
 * @return {number}
 */
// DFS with Memoization - cache the count of previously visited path.
var longestIncreasingPath = function (matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let dpcache = new Array(rows);
  for (let i = 0; i < dpcache.length; i++) {
    dpcache[i] = new Array(cols);
  }

  let longestPath = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      longestPath = Math.max(longestPath, dfs(i, j, matrix, dpcache));
    }
  }
  return longestPath;
};

const dfs = (i, j, matrix, cache, prevVal = -Infinity) => {
  if (i < 0 || i >= matrix.length || j < 0 || j >= matrix[0].length || matrix[i][j] <= prevVal) {
    return 0;
  }

  if (cache[i][j]) return cache[i][j];

  let top = dfs(i - 1, j, matrix, cache, matrix[i][j]);
  let bottom = dfs(i + 1, j, matrix, cache, matrix[i][j]);
  let left = dfs(i, j - 1, matrix, cache, matrix[i][j]);
  let right = dfs(i, j + 1, matrix, cache, matrix[i][j]);

  let count = 1 + Math.max(top, bottom, left, right);
  cache[i][j] = count;
  return count;
};

console.log(
  longestIncreasingPath([
    [9, 9, 4],
    [6, 6, 8],
    [2, 1, 1],
  ])
);
