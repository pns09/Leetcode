// Given an array nums of n integers where n > 1,
//  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Note: Please solve it without division and in O(n)

var productExceptSelf = function (nums) {
	let output = [];
	let product = 1;
	for (let i = 0; i < nums.length; i++) {
    product = product * nums[i];
		if(i == nums['length']-1){
      output[0] = product;
      output.push(output[0] / nums[i]);
	  }
	}
	return output;
};

console.log(productExceptSelf([1, 2, 3, 4]));

// My working solution. Did not justify the problem constraint.
// By using division.
// Time complexity : O(2n) => O(n)

// const util = function (output, nums) {
// 	for (let i = 1; i < nums.length; i++) {
// 		output.push(output[0] / nums[i]);
// 	}
// 	return output;
// };

// var productExceptSelf = function (nums) {
// 	let output = [];
// 	let product = 1;

// 	for (let i = 0; i < nums.length; i++) {
// 		product = product * nums[i];
// 		output[0] = product;
// 	}
// 	return util(output, nums);
// };

// console.log(productExceptSelf([1, 2, 3, 4]));
