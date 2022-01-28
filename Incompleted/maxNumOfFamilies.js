/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function (n, reservedSeats) {
  let hall = [];

  for (let i = 0; i < n; i++) {
    let rows = Array(10).fill(0);
    hall.push(rows);
  }

  for (let i = 0; i < reservedSeats.length; i++) {
    let [row, col] = reservedSeats[i];
    hall[row - 1][col - 1] = 1;
  }

  let groups = 0;
  for (let i = 0; i <= hall.length - 1; i++) {
    let j = 0;
    let count = 0;
    while (j < hall[0].length) {
      if (hall[i][j] === 0) {
        count++;
        if (count === 4) {
          groups++;
          count = 0;
        }
      } else count = 0;
      j++;
    }
  }
  return groups;
};
console.log(
  maxNumberOfFamilies(
    (n = 3),
    (reservedSeats = [
      [1, 2],
      [1, 3],
      [1, 8],
      [2, 6],
      [3, 1],
      [3, 10],
    ])
  )
);
