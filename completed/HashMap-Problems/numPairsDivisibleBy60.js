/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  //O(N) | O(1)
  let map = {};
  let pairsCount = 0;

  for (let i = 0; i < time.length; i++) {
    let remainder1 = time[i] % 60;
    let remainder2 = (60 - remainder1) % 60;
    pairsCount += map[remainder2] ? map[remainder2] : 0;
    map[remainder1] = map[remainder1] ? map[remainder1] + 1 : 1;
  }

  return pairsCount;
};

console.log(numPairsDivisibleBy60([30, 20, 150, 100, 40]));

// Brute Force
var numPairsDivisibleBy60 = function (time) {
  let count = 0;

  for (let i = 0; i < time.length; i++) {
    let songTime = time[i]; // seconds
    for (let j = i + 1; j < time.length; j++) {
      if ((songTime + time[j]) % 60 == 0) {
        count++;
      }
    }
  }
  return count;
};
