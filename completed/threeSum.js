/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function (inputNums) {
	const result = [];
	let uniqueNumsObj = {};
	let nums = inputNums.sort((a, b) => a - b);

	if (nums.length < 3) return result;
	for (let i = 0; i < nums.length; i++) {
		let pointer1 = i + 1;
		let pointer2 = nums.length - 1;
		while (pointer1 < pointer2) {
			let sum = nums[i] + nums[pointer1] + nums[pointer2];
			if (sum == 0) {
				let uniqueNumsString = `${nums[i]}${nums[pointer1]}${nums[pointer2]}`;
                // checking for duplicate number string by checking in the object.
                // after looking into the solution. 
				if (!uniqueNumsObj[uniqueNumsString]) {
					uniqueNumsObj[uniqueNumsString] = uniqueNumsString;
					result.push([nums[i], nums[pointer1], nums[pointer2]]);
				}
			}
			if (sum < 0) pointer1++;
			else if (sum > 0) pointer2--;
			else {
				pointer1++;
				pointer2--;
			}
		}
	}
	return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));



// my initial logic
// var threeSum = function (inputNums) {
// 	const result = [];
// 	let set = new Set();
// 	let nums = inputNums.sort();
// 	if ( nums.lenght < 3) return result;
// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = i; j < nums.length; j++) {
// 			for (let k = j; k < nums.length; k++) {
// 				let sum = nums[i] + nums[j] + nums[k];
// 				if (sum === 0) {
// 					let numStr = `${nums[i]}${nums[j]}${nums[k]}`;
// 					if (set.has(numStr)) {
// 						console.log("duplicate found");
// 					} else {
// 						set.add(numStr);
// 						result.push([nums[i], nums[j], nums[k]]);
// 					}
// 				}
// 			}
// 		}
// 	}
// 	// // console.log(result);
// 	return result;
// };

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
