// My solution - idea from stack overflow
/**
 * @param {number[]} nums
 * @return {number}
 */
//  Sum of first n natural numbers n(n+1)/2 - sum of array elements
var missingNumber = function (nums) {
  // O(n) | O(1)
  let expectedSum = 0;
  let sum = 0;

  for (let i = 0; i <= nums.length; i++) {
    expectedSum += i;
  }

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return expectedSum - sum;
};

var missingNumber = function (nums) {
  // O(n) | O(n)
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = true;
  }

  for (let i = 0; i <= nums.length; i++) {
    if (!map[i]) return i;
  }
};
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));

var missingNumber = function (nums) {
  let n = nums.length;
  for (var i = 0; i <= n; i++) {
    if (nums.indexOf(i) == -1) {
      return i;
    }
  }
  // with includes
  //   for (let i = 0; i <= nums.length; i++) {
  //     if (!nums.includes(i)) {
  //       return i;
  //     }
  //   }
};

// // time O(n log n) space O(1)
// var missingNumber = function(nums) {
//     nums.sort((a,b) => a-b)

//     for(let i=0; i<=nums.length; i++) {
//         if(i !== nums[i]) {
//             return i
//         }
//     }
// };

// one liner using reduce method. learn how to use reduce.
// var missingNumber = function (nums) {
// 	return nums.reduce((acc, val, i) => (acc += i + 1 - val), 0);
// };
