/**
 * @param {character[][]} picture
 * @return {number}
 */
var findLonelyPixel = function (picture) {
  let len = picture.length;
  let rowCount = Array(len).fill(0);
  let colCount = Array(len).fill(0);

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (picture[i][j] === 'B') {
        rowCount[i] += 1;
        colCount[j] += 1;
      }
    }
  }

  let count = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (picture[i][j] === 'B' && rowCount[i] === 1 && colCount[j] === 1) {
        count++;
      }
    }
  }

  return count;
};

console.log(
  findLonelyPixel([
    ['W', 'W', 'B'],
    ['W', 'B', 'W'],
    ['B', 'W', 'W'],
  ])
);
// Input: picture = [["W","W","B"],["W","B","W"],["B","W","W"]]
// Output: 3
// Explanation: All the three 'B's are black lonely pixels.
