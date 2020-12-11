var moveZeroes = function (nums) {
	let zeroArr = [];
	let i = 0;
	while (i < nums.length) {
		if (nums[i] == 0) {
			let movedZero = nums.splice(nums.indexOf(nums[i]), 1);
			zeroArr.push(movedZero);
		} else {
			i++;
		}
	}
	nums.push(...zeroArr);
};
