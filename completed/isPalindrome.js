//
// -----------------------------------------------------------------------------------------------------------------
// My solution....Number Palindrome 
// ----------------------------------------------------------------------------------------------------------------- 
var isNumPalindrome = function(x) {
  var num = x.toString();
  var arr = num
    .split("")
    .reverse()
    .join("");
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