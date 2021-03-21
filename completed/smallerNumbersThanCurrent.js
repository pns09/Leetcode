// My solution - time complexity is O(n^2) - need to solve it in O(n);
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
	let answerArr = [];
	for (let i = 0; i < nums.length; i++) {
		let count = 0;
		for (let j = 0; j < nums.length; j++) {
			if (nums[i] > nums[j]) {
				count++;
			}
		}
		answerArr.push(count);
	}
	return answerArr;
};

// Leetcode solution - time O(n^2) space O(n)
// var smallerNumbersThanCurrent = function (nums) {
// 	const numsCopy = [...nums].sort();

// 	return nums.map((num) => numsCopy.indexOf(num));
// };

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
