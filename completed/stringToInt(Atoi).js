/**
 * @param {string} s
 * @return {number}
 */
// without inbuilt methods
var myAtoi = function (s) {
  s = s.trim();

  let sign = 1;
  let index = 0;
  if (s[0] === '-') {
    sign = -1;
    index++;
  } else if (s[0] === '+') {
    index++;
  }

  let currNum = 0;
  for (let i = index; i < s.length; i++) {
    let currDigit = s[i];
    if (currDigit >= '0' && currDigit <= '9') {
      currNum = currNum * 10 + +currDigit;
    } else break;
  }

  const maxRange = Math.pow(2, 31) - 1;
  const minRange = -Math.pow(2, 31);

  let num = sign * currNum;

  if (num >= maxRange) return maxRange;
  else if (num <= minRange) return minRange;
  else return num;
};
console.log(myAtoi('-11919730356x'));
// Input: s = "4193 with words"
// Output: 4193
// Explanation:
// Step 1: "4193 with words" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "4193 with words" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "4193 with words" ("4193" is read in; reading stops because the next character is a non-digit)
//              ^
// The parsed integer is 4193.
// Since 4193 is in the range [-231, 231 - 1], the final result is 4193.

// Updated solution - new (2020) - using inbuild parseInt method
var myAtoi = function (str) {
  let stringArr = str.trim().split(' ');
  let min = -1 * Math.pow(2, 31);
  let max = Math.pow(2, 31) - 1;
  let number = parseInt(stringArr[0]) >= max ? max : parseInt(stringArr[0]) <= min ? min : parseInt(stringArr[0]);
  if (number) {
    return number;
  } else {
    return 0;
  }
};

//My solution - 0ld (2019)
// var myAtoi = function(str) {
//   var empty = str.trim();
//   if (empty === "") return 0;
//   var a = str.split(" ");
//   for (let i = 0; i <= a.length; i++) {
//     if (!parseInt(a[0])) {
//       return 0;
//     }
//     if (parseInt(a[i])) {
//       if (parseInt(a[i]) >= Math.pow(2, 31)) return Math.pow(2, 31) - 1;
//       if (parseInt(str) < 0) {
//         var posInt = -1 * parseInt(str);
//         if (posInt == Math.pow(2, 31) + 1) {
//           return -1 * Math.pow(2, 31);
//         }
//         if (posInt > Math.pow(2, 32)) {
//           return -1 * Math.pow(2, 31);
//         } else return parseInt(a[i]);
//       } else return parseInt(a[i]);
//     } else if (parseInt(a[i]) && parseInt(a[i]) > Math.pow(2, 32)) {
//       return Math.pow(2, 31);
//     }
//   }
// };
