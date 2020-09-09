/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = (nums) => {
	let object = {};
	let newArray = [];
	function _has(num) {
		return object.hasOwnProperty(num) ? true : false;
	}
	for (let i = 0; i < nums.length; i++) {
		let index = nums[i];
		if (_has(index)) {
			newArray.push(index);
		} else {
			object[i] = index;
		}
	}
	return newArray;
};

console.log(findDuplicates([4, 3, 2, 7, 2, 1, 3, 6]));
