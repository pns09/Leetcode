// Time Submitted: 08/05/2020 22:26
// Status: Accepted
// Runtime: 84 ms
// Memory: 39.9 MB
// faster than 67.25% of JavaScript online submissions

/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
	let repeatedEle = [];
	let BreakException = {};
	//  GTk: You cannot use a break statement inside forEach method;
	//  if you have to short circuit forEach loop, use try, catch block and throw an exception like below.
	try {
		A.forEach((value, index) => {
			if (A.indexOf(A[index]) !== A.lastIndexOf(A[index])) {
				repeatedEle.push(value);
				throw BreakException;
			}
		});
	} catch (e) {
		if (e == BreakException) return repeatedEle;
	}
};

console.log(repeatedNTimes([1, 2, 3, 3]));

// Using sets
// faster than 100% of solutions (76ms)

// var repeatedNTimes = function (A) {
// 	const setA = new Set();
// 	let repeatNum = 0;
// 	A.forEach((a) => {
// 		if (setA.has(a)) repeatNum = a;
// 		else setA.add(a);
// 	});
// 	return repeatNum;
// };
