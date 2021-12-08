/**
 * @param {character[][]} grid
 * @return {number}
 */
const dfs = (grid, i, j) => {
  if (i < 0 || i > grid.length || j < 0 || j > grid[i].length || grid[i][j] == '0') {
    return 0;
  }
  grid[i][j] = '0';
  dfs(grid, i - 1, j);
  dfs(grid, i + 1, j);
  dfs(grid, i, j - 1);
  dfs(grid, i, j + 1);
  return 1;
};

var numIslands = function (grid) {
  if (grid.length == 0) {
    return 0;
  }
  let countOfIsland = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] != '0') {
        countOfIsland += parseInt(dfs(grid, i, j));
      }
    }
  }
  return countOfIsland;
};

console.log(
  numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ])
);
