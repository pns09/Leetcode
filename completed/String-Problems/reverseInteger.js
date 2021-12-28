/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  //  O(n) | O(n)
  let sign = 1;
  if (x < 0) sign = -1;

  x = x.toString();
  let reversedStr = '';
  let left = x.length - 1;

  while (left >= 0) {
    reversedStr += x[left];
    left--;
  }

  x = parseInt(reversedStr);

  if (-Math.pow(2, 31) < x && x < Math.pow(2, 31) - 1) {
    return sign * x;
  } else {
    return 0;
  }
};
console.log(reverse(-1563847412));
// output: 0;
// If reversing x causes the value to go outside 
// the signed 32-bit integer range [-231, 231 - 1], then return 0.


// Using Array solution.
var reverse = function (x) {
  if (-Math.pow(2, 31) < x && x < Math.pow(2, 31) - 1) {
    let arrOfStr = x.toString().split('');
    let multNum = 1;
    for (let i = 0; i < arrOfStr.length; i++) {
      if (arrOfStr[0] == '-') {
        arrOfStr.splice(0, 1);
        multNum = -1;
      } else {
        let str = arrOfStr.splice(i, 1);
        arrOfStr.unshift(...str);
      }
    }
    let finalNum = Number(arrOfStr.toString().split(',').join(''));
    return finalNum > 2147483648 ? 0 : finalNum * multNum;
  } else return 0;
};

// ************************************************optimized solution**********************************************
// const reverse = x => {
//   const limit = 2147483648;
//   const k = x < 0 ? -1 : 1;
//   const n = Number(String(Math.abs(x)).split('').reverse().join(''));
//   console.log( n > limit ? 0 : n * k);
// };

// reverse(-123)
