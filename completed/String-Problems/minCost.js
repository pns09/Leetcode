/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function (s, cost) {
  let res = 0;
  let i = 0;
  let j = 1;

  while (i < s.length) {
    if (s[i] == s[j]) {
      res += Math.min(cost[i], cost[j]);
      if (cost[i] < cost[j]) {
        i = j;
      }
      j++;
    } else {
      i = j;
      j++;
    }
  }
  return res;
};

console.log(minCost('aaabbbabbbb', [3, 5, 10, 7, 5, 3, 5, 5, 4, 8, 1]));

// #2
// /**
//  * @param {string} s
//  * @param {number[]} cost
//  * @return {number}
//  */
//  var minCost = function (s, cost) {
//     let res = 0,
//       max = 0;
//     for (let i = 0; i < s.length; i++) {
//       res += cost[i];
//       max = Math.max(cost[i], max);
//       if (s[i] != s[i + 1]) {
//         res -= max;
//         max = 0;
//       }
//     }
//     return res;
//   };
  
//   console.log(minCost('abaac', [1,2,3,4,5]));
  