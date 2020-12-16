// My General solution after looking on StackOverflow - 194/294 testcases passed!
// But there is a problem when the input binary string is too long!
// var addBinary = function(a, b) {
//     let parser = (parseInt(a,2)) + (parseInt(b,2))
//     let res = parser.toString(2);
//   parseInt(res,2)
// };

// Working solution but not totally understood!
var addBinary = function (a, b) {
	let aLast = a.length - 1;
	let bLast = b.length - 1;

	let carry = 0;
	let aStr = [];

	while (aLast >= 0 || bLast >= 0) {
		let sum = carry;
		if (aLast >= 0) {
			sum += Number(a[aLast]);
			aLast--;
		}

		if (bLast >= 0) {
			sum += Number(b[bLast]);
			bLast--;
		}
		aStr.push(sum % 2);
		carry = Math.floor(sum / 2);
	}

	if (carry) aStr.push(carry);

	return aStr.reverse().join("");
};

// Code is understandable but all test cases have not passed
// let addBinary = (a, b) => {
//   let highestNumber;
//   let lowestNumber;
//   let answer = "";
//   let carry = 0;

//   let aArr = a.split("");
//   let bArr = b.split("");

//   if (aArr.length > bArr.length) {
//     highestNumber = aArr;
//     lowestNumber = bArr;
//   } else {
//     highestNumber = bArr;
//     lowestNumber = aArr;
//   }

//   let diff = highestNumber.length - lowestNumber.length;
//   let startingInd = highestNumber.length - diff;

//   for (let i = startingInd; i < highestNumber.length; i++) {
//     lowestNumber = ["0"].concat(lowestNumber);
//   }

//   for (let i = highestNumber.length - 1; i >= 0; i--) {
//     let num1 = parseInt(highestNumber[i]);
//     let num2 = parseInt(lowestNumber[i]);
//     let sum = num1 + num2 + carry;

//     let currValue = sum === 1 || sum === 3 ? "1" : "0";

//     answer = currValue.concat(answer);

//     if (sum === 2 || sum === 3) carry = 1;
//   }

//   if (carry == 1) answer = "1".concat(answer);
//   if (carry == 2) answer = "10".concat(answer);

//   return answer;
// };

// console.log(addBinary(a, b));
