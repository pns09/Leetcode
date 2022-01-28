// Two pointer algo approach.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // O(n) | O(n)
  let sortedArr = [];
  let p1 = 0;
  let p2 = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    let square = 0;
    if (Math.abs(nums[p1]) > Math.abs(nums[p2])) {
      square = nums[p1] * nums[p1];
      p1++;
    } else {
      square = nums[p2] * nums[p2];
      p2--;
    }
    sortedArr[i] = square;
  }
  return sortedArr.reverse();
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));

// var sortedSquares = function (nums) {
//   let result = [];
//   let p1 = 0;
//   let p2 = nums.length - 1;
//   for (let i = nums.length - 1; i >= 0; i--) {
//     let square;
//     if (Math.abs(nums[p1]) < Math.abs(nums[p2])) {
//       square = nums[p2] * nums[p2];
//       p2--;
//     } else {
//       square = nums[p1] * nums[p1];
//       p1++;
//     }
//     result[i] = square;
//   }
//   console.log(result);
//   return result;
// };

// console.log(sortedSquares([-4, -1, 0, 3, 10]));

// My initial solution - O(nlogn) solution.
//   var sortedSquares = function (nums) {
//     for(let i=0; i<nums.length; i++) {
//         nums[i] = Math.pow(Math.abs(nums[i]),2);
//     }
//     return nums.sort((a,b) => a-b);
//   };

//   console.log(sortedSquares([-4,-1,0,3,10]))
