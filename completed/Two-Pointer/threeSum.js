/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (inputNums) {
  // O(nlogn + O(n^2)) | O(n)
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
        // below code after looking into the solution.
        if (!uniqueNumsObj[uniqueNumsString]) {
          uniqueNumsObj[uniqueNumsString] = uniqueNumsString;
          result.push([nums[i], nums[pointer1], nums[pointer2]]);
        }
        pointer1++;
        pointer2--;
      }
      if (sum < 0) pointer1++;
      else if (sum > 0) pointer2--;
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]  // output should not contain duplicate triplets.

// Approach 2
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return [];

  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let p1 = 0;
    let p2 = nums.length - 1;
    let sum = 0;

    while (p1 < p2) {
      sum = nums[i] + nums[p1] + nums[p2];

      if (sum < 0) {
        p1++;
      } else if (sum > 0) {
        p2--;
      } else {
        res.push(nums[i], nums[p1], nums[p2]);
        p1++;
        p2--;
        while (p1 < p2) {
          if (nums[p1 - 1] === nums[p1]) p1++;
          if (nums[p2 + 1] === nums[p2]) p2++;
          else break;
        }
      }
    }
  }
  return res;
};

// Brute force approach - O(n^3)
// var threeSum = function (inputNums) {
// 	const result = [];
// 	let set = new Set();
// 	let nums = inputNums.sort();
// 	if ( nums.length < 3) return result;
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
// 	return result;
// };

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
