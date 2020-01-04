//My solution 
var isPalindrome = function(x) {
  var num = x.toString();
  var arr = num
    .split("")
    .reverse()
    .join("");
  if (x == arr) {
    console.log(true);
  } else console.log(false);
};


// Optimised solution
