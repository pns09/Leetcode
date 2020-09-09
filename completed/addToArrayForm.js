// 156 / 156 test cases passed.
// Status: Accepted
// Runtime: 192 ms
// Memory Usage: 43.3 MB

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
	let num = "";

	for (let i = 0; i < A.length; i++) {
		num = num + A[i];
	}

	let res = BigInt(num) + BigInt(K);

	return ("" + res).split("").map((t) => {
		return parseInt(t);
	});
};

// Beats 100% solution.
// var addToArrayForm = function (arr, K) {
// 	arr.reverse();

// 	let carry = 0;

// 	for (let [i, num] of arr.entries()) {
// 		const total = num + K + carry;
// 		arr[i] = total % 10;

// 		carry = Math.floor(total / 10);

// 		K = 0;
// 	}

// 	while (carry > 0) {
// 		arr.push(carry % 10);
// 		carry = Math.floor(carry / 10);
// 	}

// 	return arr.reverse();
// };

console.log(addToArrayForm([1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3], 516));
