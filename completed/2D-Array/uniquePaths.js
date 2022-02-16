/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
//  The robot can only move either down or right at any point in time
var uniquePaths = function (m, n) {
  // O(m * n) | O(n)
  let ways = [];

  for (let i = 0; i < m; i++) {
    let row = Array(n).fill(0);
    ways.push(row);
  }

  for (let i = 0; i < ways.length; i++) ways[i][0] = 1; // marking first col as 1 in each row
  for (let j = 0; j < ways[0].length; j++) ways[0][j] = 1; // marking all the cols as 1 in first row

  for (let i = 1; i < ways.length; i++) {
    for (let j = 1; j < ways[i].length; j++) {
      ways[i][j] = ways[i - 1][j] + ways[i][j - 1]; // sum of right and bottom cols
    }
  }
  return ways[m - 1][n - 1]; // end row and col will hold our result
};

console.log(uniquePaths((m = 3), (n = 7)));
// output: 28
