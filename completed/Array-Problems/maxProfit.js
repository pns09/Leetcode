/**
 * @param {number[]} prices
 * @return {number}
 */
// Best time to buy and sell stocks
var maxProfit = function (prices) {
  //  O(n) | O(1)
  if (prices.length === 0) return 0;
  let maxProfit = 0;
  let minProfit = Infinity;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minProfit) {
      minProfit = prices[i];
    } else if (prices[i] - minProfit > maxProfit) {
      maxProfit = prices[i] - minProfit;
    }
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
