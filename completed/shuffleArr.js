// My solution #1
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
	let yArr = [];
	let xyArr = [];
	for (let i = 0; i < n; i++) {
		yArr.push(nums.pop());
		xyArr.push(nums[i], nums[i + n]);
	}
	yArr.reverse();
	for (let i = 0; i < nums.length; i++) {
		xyArr.push(nums[i], yArr[i]);
	}
	return xyArr;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));

// My Solution #2
var shuffle = function (nums, n) {
	let xyArr = [];
	for (let i = 0; i < n; i++) {
		xyArr.push(nums[i], nums[i + n]);
	}
	return xyArr;
};

// Leetcode solutions.
// var shuffle = function (nums, n) {
// 	let result = [];
// 	for (let i = 0; i < n; ++i) {
// 		result.push(nums[i]);
// 		result.push(nums[i + n]);
// 	}
// 	return result;
// };

// var shuffle = function (nums, n) {
// 	let arrI = [];
// 	let cot = nums.slice(n);
// 	for (let i = 0; i < nums.length - n; i++) {
// 		arrI.push(nums[i], cot[i]);
// 	}
// 	return arrI;
// };
