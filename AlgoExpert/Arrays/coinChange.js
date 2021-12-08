function nonConstructibleChange(coins) {
  // Write your code here.
  let currentChange = 0;
  coins.sort((a, b) => a - b);
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > currentChange + 1) return currentChange + 1;
    currentChange += coins[i];
  }
  return currentChange + 1;
}
console.log(nonConstructibleChange([1, 2, 5]));

// output: 4
