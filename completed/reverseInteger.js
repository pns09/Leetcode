// My solution
// var reverse = function (x) {
// 	var carr = x.toString();
// 	var arr = carr.split("").reverse();
// 	if (arr[arr.length - 1] === "-") {
// 		arr.unshift(arr[arr.length - 1]);
// 		arr.pop();
// 	} else if (arr[arr.length - 1] === "0") {
// 		arr.pop();
// 	}
// 	var numArr = arr.toString().split(",").join("");
// 	if (numArr > Math.pow(2, 31) - 1) {
// 		console.log(0);
// 	} else if (-Math.pow(2, 31) > numArr) {
// 		console.log(0);
// 	} else console.log(numArr);
// };

// My updated solution - all test cases passed - 12/6/2020 
var reverse = function (x) {
	if (-Math.pow(2, 31) < x && x < Math.pow(2, 31) - 1) {
		let arrOfStr = x.toString().split("");
		let multNum = 1;
		for (let i = 0; i < arrOfStr.length; i++) {
			if (arrOfStr[0] == "-") {
				arrOfStr.splice(0, 1);
				multNum = -1;
			} else {
				let str = arrOfStr.splice(i, 1);
				arrOfStr.unshift(...str);
			}
		}
		let finalNum = Number(arrOfStr.toString().split(",").join(""));
		return finalNum > 2147483648 ? 0 : finalNum * multNum;
	} else return 0;
};
console.log(reverse(-1563847412));

// ************************************************optimized solution**********************************************
// const reverse = x => {
//   const limit = 2147483648;
//   const k = x < 0 ? -1 : 1;
//   const n = Number(String(Math.abs(x)).split('').reverse().join(''));
//   console.log( n > limit ? 0 : n * k);
// };

// reverse(-123)
