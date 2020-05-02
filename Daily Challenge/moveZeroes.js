// In-Place modification. This is the ask of the problem.
const util = function(nums, i) {
	let popEle = nums.splice(i, 1);
	nums.push(popEle);
	if (nums[i] == 0) {
		return util(nums, i);
	}
};

var moveZeroes = function(nums) {
	nums.forEach((element, i) => {
		if (nums[i] == 0) {
			if (typeof nums[i] == "object") return;
			return util(nums, i);
		}
	});
	return [].concat.apply([], nums);
};

console.log(moveZeroes([0, 0, 0, 1]));

// Wroking solution by making a copy of the array. Not IN-PLACE solution.
// var moveZeroes = function(nums) {
// 	let arr = [];
// 	let poparr = [];
// 	nums.forEach((element, i) => {
// 		if (nums[i] == 0) {
// 			let popEle = nums.splice(i, 1);
// 			poparr.push(popEle);
// 			if (nums[i]) {
// 				if (nums[i] != 0) return arr.push(nums[i]);
// 			}
// 		} else {
// 			return arr.push(element);
// 		}
// 	});
// 	return arr.concat(...poparr);
// };

// console.log(moveZeroes([0,1,0,3,12]));
