/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
  let prev;
  let happy = '';
  let highest = Math.max(a, b, c);
  while (highest !== 0) {
    highest = Math.max(a, b, c);
    let secondHighest = false;

    if ((highest === a && prev === 'a') || (highest === b && prev === 'b') || (highest === c && prev === 'c')) secondHighest = true;
    if (highest === a && prev === 'a') highest = Math.max(b, c);
    if (highest === b && prev === 'b') highest = Math.max(a, c);
    if (highest === c && prev === 'c') highest = Math.max(a, b);
    if (highest === 0) break;

    if (highest === a && prev != 'a') {
      if (a >= 2 && !secondHighest) {
        happy += 'aa';
        a -= 2;
      } else {
        happy += 'a';
        a--;
      }
      prev = 'a';
      continue;
    }
    if (highest === b && prev != 'b') {
      if (b >= 2 && !secondHighest) {
        happy += 'bb';
        b -= 2;
      } else {
        happy += 'b';
        b--;
      }
      prev = 'b';
      continue;
    }
    if (highest === c && prev != 'c') {
      if (c >= 2 && !secondHighest) {
        happy += 'cc';
        c -= 2;
      } else {
        happy += 'c';
        c--;
      }
      prev = 'c';
      continue;
    }
  }
  return happy;
};

console.log(longestDiverseString((a = 1), (b = 1), (c = 7)));

// Input: a = 1, b = 1, c = 7
// Output: "ccaccbcc"
// Explanation: "ccbccacc" would also be a correct answer.
