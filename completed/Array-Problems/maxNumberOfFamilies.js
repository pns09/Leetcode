/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
// cinema seat allocation
var maxNumberOfFamilies = function (n, reservedSeats) {
  let count = 0;
  let map = new Map();
  let seats = [];

  for (let i = 0; i < reservedSeats.length; i++) {
    let [row, seat] = reservedSeats[i];

    if (seat == 1 || seat == 10) {
      continue;
    }

    if (map.has(row)) {
      seats = map.get(row);
    } else {
      seats = [];
      seats[0] = true;
      seats[1] = true;
      seats[2] = true;
    }

    if (seat == 2 || seat == 3) {
      seats[0] = false;
    } else if (seat == 8 || seat == 9) {
      seats[2] = false;
    } else if (seat == 4 || seat == 5) {
      seats[0] = false;
      seats[1] = false;
    } else if (seat == 6 || seat == 7) {
      seats[1] = false;
      seats[2] = false;
    }

    map.set(row, seats);
  }

  for (let [key, value] of map) {
    let seatAvailable = value; // [true, true, true]
    if ((seatAvailable[0] && seatAvailable[1] && seatAvailable[2]) || (seatAvailable[0] && seatAvailable[2])) {
      count += 2;
    } else if ((seatAvailable[0] && seatAvailable[2]) || seatAvailable[0] || seatAvailable[1]) {
      count++;
    } else if ((seatAvailable[1] && seatAvailable[2]) || seatAvailable[1] || seatAvailable[2]) {
      count++;
    }
  }

  count = count + (n - map.size) * 2;

  return count;
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

// Input: n = 3, reservedSeats = [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]]
// Output: 4
// Explanation: The figure above shows the optimal allocation for four groups,
// where seats mark with blue are already reserved and contiguous seats mark with orange are for one group.
