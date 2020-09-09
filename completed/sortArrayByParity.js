/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
	let Acopy = A.slice(0);
	for (let i = 0; i < A.length; i++) {
		if (A.length == 2) {
			if (A[i] % 2 != 0) {
				let oddNum = A.splice(A[i], 1);
				A.splice(Acopy.length, 0, oddNum);
				return [].concat.apply([], A);
			}
		} else if (A[i] % 2 != 0) {
			let oddNum = A.splice(0, 1);
			A.splice(A.length, 0, oddNum);
		}
	}
	return [].concat.apply([], A);
};

console.log(sortArrayByParity([0, 1]));


// Submission solution  - lol my solution.😆
var sortArrayByParity = function (A) {
	let evenArray = A.filter((item) => item % 2 === 0);
	let oddArray = A.filter((item) => item % 2 === 1);
	return evenArray.concat(oddArray);
};
