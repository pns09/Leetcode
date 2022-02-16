/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let p1 = num1.length - 1;
  let p2 = num2.length - 1;
  let sum = 0;
  let carry = 0;
  let result = [];

  while (p1 >= 0 || p2 >= 0) {
    sum = (p1 >= 0 ? parseInt(num1.charAt(p1)) : 0) 
          + (p2 >= 0 ? parseInt(num2.charAt(p2)) : 0) 
          + carry; //  string - '0' converts to number

    result.push(sum % 10);
    if (sum > 9) carry = 1;
    else carry = 0;
    p1--;
    p2--;
  }
  if (carry) result.push(carry);

  return result.reverse().join('');
};

console.log(addStrings('11', '123'));

// Input: num1 = "11", num2 = "123"
// Output: "134"
