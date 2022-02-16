/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function (prices) {
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }
  return maxProfit;
};

console.log(maxProfit2([1, 2, 3, 4]));
/*
output: 4
-> 1 - 0 = 1 +
-> 2 - 1 = 1 + 
-> 3 - 2 = 1 +
-> 4 - 3 = 1 
->total of above steps is output: 4
*/
