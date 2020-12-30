// Updated solution - new (2020)
var myAtoi = function (str) {
	let stringArr = str.trim().split(" ");
	let min = -1 * Math.pow(2, 31);
	let max = Math.pow(2, 31) - 1;
	let number = parseInt(stringArr[0]) >= max ? max : parseInt(stringArr[0]) <= min ? min : parseInt(stringArr[0]);
	if (number) {
		return number;
	} else {
		return 0;
	}
};
console.log(myAtoi("-11919730356x"));


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

