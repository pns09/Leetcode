// My solution
var reverse = function(x) {
  var carr = x.toString();
  var arr = carr.split("").reverse();
  if (arr[arr.length - 1] === "-") {
    arr.unshift(arr[arr.length - 1]);
    arr.pop();
  } else if (arr[arr.length - 1] === "0") {
    arr.pop();
  }
  var numArr = arr
    .toString()
    .split(",")
    .join("");
  if (numArr > Math.pow(2, 31) - 1) {
    console.log(0);
  } else if (-Math.pow(2, 31) > numArr) {
    console.log(0);
  } 
  else console.log(numArr);
};

reverse(-1534236469);



// ************************************************optimized solution**********************************************

// const reverse = x => {
//   const limit = 2147483648;
//   const k = x < 0 ? -1 : 1;
//   const n = Number(String(Math.abs(x)).split('').reverse().join(''));
//   console.log( n > limit ? 0 : n * k);
// };

// reverse(-123)