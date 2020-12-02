/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Using sorting is easy but it is O(nlogn). Remember sorting when dealing with duplicates in array.
var containsDuplicate = function (nums) {
	nums.sort();
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] == nums[i + 1]) return true;
	}
	return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));

/* Need to check the condition thoroughly. only few test case passed. */
// var containsDuplicate = function (nums) {
// 	if (nums.length <= 1) {
// 		return false;
// 	}
// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = 0; i < i; j++) {
// 			if (nums[i] == nums[j]) {
// 				return true;
// 			}
// 		}
// 	}
// 	return false;
// };
