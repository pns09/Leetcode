// var plusOne = function (digits) {
// 	var arr = [];
// 	if (digits.length === 0) {
// 		arr.push(1);
// 		return arr;
// 	}
// 	if (digits.length === 1) {
// 		arr.push(digits[0] + 1);
// 		let newAr = [];
// 		if (arr[0] >= 10) {
// 			arr.forEach((element) => {
// 				let rem = Math.round(element % 10);
// 				let quotient = Math.round(element / 10);
// 				return newAr.push(quotient, rem);
// 			});
// 			return newAr;
// 		} else return arr;
// 	}

// 	var lastElem = digits.pop();
// 	lastElem += 1;
// 	for (var i = 0; i <= digits.length - 1; i++) {
// 		arr.push(digits[i]);
// 		if (i == digits.length - 1) {
// 			arr.push(lastElem);
// 			return arr;
// 		}
// 	}
// };

var plusOne = function (digits) {
	let newArr = [];
	if (digits[0] == 0 && digits[1] <= 8) {
		let lastnum = digits.pop() + 1;
		digits.push(lastnum);
		return digits;
	}
	let res = parseInt(digits.toString().split(",").join("")) + 1;
	if (res >= 10) {
		let resString = res.toString().split("");
		for (let i = 0; i < resString.length; i++) {
			newArr.push(parseInt(resString[i]));
		}
		return newArr;
	}
	return [res];
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
