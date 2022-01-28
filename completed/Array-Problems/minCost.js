/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (s, cost) {
  let i = 0;
  let j = 1;
  let minCost = 0;

  while (i < s.length) {
    if (s[i] === s[j]) {
      minCost += Math.min(cost[i], cost[j]);
      if (cost[i] < cost[j]) {
        i = j;
      }
    } else {
      i = j;
    }
    j++;
  }
  return minCost;
};

console.log(minCost('abaac', [1, 2, 3, 4, 5]));

// Input: colors = "abaac", neededTime = [1,2,3,4,5]
// Output: 3
// Explanation: In the above image, 'a' is blue, 'b' is red, and 'c' is green.
// Bob can remove the blue balloon at index 2. This takes 3 seconds.
// There are no longer two consecutive balloons of the same color. Total time = 3.
