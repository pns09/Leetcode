/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  const dp = Array(num1.length + num2.length).fill(0);

  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      //Define
      let prevRemainderToAdd = dp[i + j + 1];
      let product = num1[i] * num2[j] + prevRemainderToAdd;
      let unitsDigit = product % 10;
      let carry = Math.floor(product / 10);

      // update
      dp[i + j + 1] = unitsDigit;
      dp[i + j] += carry;
    }
  }
  while (dp[0] === 0) dp.shift();
  if (!dp.length) return '0';
  return dp.join('');
};

console.log(multiply((num1 = '123'), (num2 = '456')));
// Input: num1 = "123", num2 = "456"
// Output: "56088"
