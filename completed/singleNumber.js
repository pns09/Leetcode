/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	if (nums.length > 1) {
		nums.sort();
		for (let i = 0; i < nums.length; i++) {
			if (nums[i] == nums[i + 1]) {
				i++;
			} else {
				return nums[i];
			}
		}
	} else {
		return nums[0];
	}
};

console.log(singleNumber([4, 1, 2, 1, 2]));
