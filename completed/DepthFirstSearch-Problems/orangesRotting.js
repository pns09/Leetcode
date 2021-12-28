/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] !== 2 && grid[i][j] !== 0) count = Math.max(dfs(grid, i, j), count);
    }
  }
  return count === Infinity ? -1 : count;
};

const dfs = (grid, i, j) => {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === 0) {
    return Infinity;
  }

  if (grid[i][j] === 2) return 0;

  grid[i][j] = 0;

  let min = Math.min(dfs(grid, i - 1, j), dfs(grid, i + 1, j), dfs(grid, i, j - 1), dfs(grid, i, j + 1));

  grid[i][j] = 1;

  return min === Infinity ? min : min + 1;
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4
