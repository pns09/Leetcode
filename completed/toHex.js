/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  if (Math.pow(-2, 31) <= num <= Math.pow(2, 31) - 1) {
    //  Took from Stack overflow. Need to understand it!
    if (num < 0) {
      num = 0xffffffff + num + 1;
    }
    return num.toString(16);
  }
};

// -------------------------------------------------------------------------
// leetcode solution without manupilating the bits.
var toHex = function (num) {
  const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  if (num == 0) return '0';

  if (num < 0) {
    num += Math.pow(2, 32);
  }
  let res = '';
  while (num > 0) {
    var digit = num % 16;
    res = arr[digit] + res;
    num = Math.floor(num / 16);
  }
  return res;
};

console.log(toHex(-1));
