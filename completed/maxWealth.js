/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
	let maxWealth = [];
	let sum = 0;
	for (let i = 0; i < accounts.length; i++) {
		for (let j = 0; j < accounts[i].length; j++) {
			sum += accounts[i][j];
		}
		maxWealth.push(sum);
		sum = 0;
	}
	return Math.max(...maxWealth);
};

console.log(
	maximumWealth([
		[1, 2, 3],
		[3, 2, 1],
	])
);


// Leetcode solution 