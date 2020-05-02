// completed solution
var myAtoi = function(str) {
  var empty = str.trim();
  if (empty === "") return 0;
  var a = str.split(" ");
  for (let i = 0; i <= a.length; i++) {
    if (!parseInt(a[0])) {
      return 0;
    }
    if (parseInt(a[i])) {
      if (parseInt(a[i]) >= Math.pow(2, 31)) return Math.pow(2, 31) - 1;
      if (parseInt(str) < 0) {
        var posInt = -1 * parseInt(str);
        if (posInt == Math.pow(2, 31) + 1) {
          return -1 * Math.pow(2, 31);
        }
        if (posInt > Math.pow(2, 32)) {
          return -1 * Math.pow(2, 31);
        } else return parseInt(a[i]);
      } else return parseInt(a[i]);
    } else if (parseInt(a[i]) && parseInt(a[i]) > Math.pow(2, 32)) {
      return Math.pow(2, 31);
    }
  }
};

console.log(myAtoi("2147483800"));

//  INITIAL LOGIC WIHTOUT THE 32-BIT CONDITION CHECK!!!!
// /**
//  * @param {string} str
//  * @return {number}
//  */
// var myAtoi = function(str) {
//   var a = str.split(" ");
//   for (let i = 0; i <= a.length; i++) {
//     if(a[i] === ''){
//       return parseInt(str)
//     }else if (!parseInt(a[0])) {
//       return 0;
//     } else if (parseInt(a[i])) {
//       return parseInt(a[i]);
//     }
//   }
// }
