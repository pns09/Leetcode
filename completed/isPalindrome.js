/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let originalX = x;
  let reversedX = 0;

  if (Math.sign(x) == -1) {
    return false;
  }

  while (true) {
    let remainder = x % 10;
    reversedX = reversedX * 10 + remainder;
    x = Math.floor(x / 10);

    if (x === 0) break;
  }

  return originalX === reversedX;
};
console.log(isPalindrome(121));
// output: true;

//
// -----------------------------------------------------------------------------------------------------------------
// My solution....Number Palindrome
// -----------------------------------------------------------------------------------------------------------------
var isPalindrome = function (x) {
  var num = x.toString();
  var arr = num.split('').reverse().join('');
  if (x == arr) {
    console.log(true);
  } else console.log(false);
};

// -----------------------------------------------------------------------------------------------------------------
// String Palindrome
// -----------------------------------------------------------------------------------------------------------------
// clear and easy solution considering all the edge cases.
// var isPalindrome = function(s) {
//     s = s.replace(/[^a-z0-9]/gi, '');
//     s = s.toLowerCase();
//     let start = 0, end = s.length - 1;
//     while(start < end) {
//         if(s.charAt(start++) != s.charAt(end--)) {
//             return false;
//         }
//     }
//     return true;
// };
