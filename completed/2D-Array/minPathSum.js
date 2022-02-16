var minPathSum = function (grid) {
  //O(mn) | O(1)
  for (let i = grid.length - 1; i >= 0; i--) {
    for (let j = grid[0].length - 1; j >= 0; j--) {
      if (i === grid.length - 1 && j !== grid[0].length - 1) {
        grid[i][j] += grid[i][j + 1];
      } else if (i !== grid.length - 1 && j === grid[0].length - 1) {
        grid[i][j] += grid[i + 1][j];
      } else if (i !== grid.length - 1 && j !== grid[0].length - 1) {
        grid[i][j] += Math.min(grid[i][j + 1], grid[i + 1][j]);
      }
    }
  }
  return grid[0][0];
};

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
