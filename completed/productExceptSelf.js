// My solution - need to do it in O(n) runtime complexity.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	let ans = [];
	for (let i = 0; i < nums.length; i++) {
		let product = 1;
		let poppedEle = nums.pop();
		for (let j = 0; j < nums.length; j++) {
			product *= nums[j];
		}
		ans.push(product);
		nums.unshift(poppedEle);
	}
	return ans.reverse();
};

console.log(productExceptSelf([1, 2, 3, 4]));

// O(n) runtime complexity
/**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
var productExceptSelf = function (nums) {
	const results = Array(nums.length).fill(1);
	let preProduct = 1;
	for (let i = 0; i < nums.length; i++) {
		preProduct *= nums[i];
		results[i] = preProduct;
	}

	let postProduct = 1;
	for (let i = nums.length - 1; i >= 0; i--) {
		results[i] = postProduct * (i > 0 ? results[i - 1] : 1);
		postProduct *= nums[i];
	}
	return results;
};

// left and right array multiplicaion other than self.
var productExceptSelf = function (nums) {
	const len = nums.length;

	let left = [];
	left[0] = 1;
	let right = [];
	right[len - 1] = 1;

	for (let i = 1; i < len; i++) {
		left[i] = left[i - 1] * nums[i - 1];
	}

	for (let j = len - 2; j >= 0; j--) {
		right[j] = right[j + 1] * nums[j + 1];
	}

	let out = [];
	for (let k = 0; k < len; k++) {
		out.push(left[k] * right[k]);
	}

	return out;
};
