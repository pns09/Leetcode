/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  let table = Array(1001).fill(0);

  for (let i = 0; i < trips.length; i++) {
    table[trips[i][1]] += trips[i][0]; // initial "from" location will add up
    table[trips[i][2]] -= trips[i][0]; // ending "to" location will substract
  }

  for (let i = 0; i < table.length; i++) {
    capacity -= table[i]; // substract capacity at each from and to locations

    if (capacity < 0) return false;
  }
  return true;
};

console.log(
  carPooling(
    [
      [2, 1, 5],
      [3, 3, 7],
    ],
    (capacity = 4)
  )
);

// Input: trips = [[2,1,5],[3,3,7]], capacity = 4
// Output: false
