/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = (nums) => {
  // O(n) | O(1)
  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const temp = nums[start];
      nums[start] = nums[i];
      nums[i] = temp;
      start++;
    }
  }
  return nums;
};
console.log(moveZeroes([0, 0, 1]));
// output : [1, 0, 0]

// Two Pointer Approach - in place approach - without creating new Arr
// var moveZeroes = function (nums) {
//   let i = 0;
//   let counter = 0;
//   while (counter < nums.length) {
//     if (nums[i] === 0) {
//       nums.push(...nums.splice(i, 1));
//     } else {
//       i++;
//     }
//     counter++;
//   }
//   return nums;
// };

// By using extra space - O(N) | O(N)
// var moveZeroes = function (nums) {
//   let zeroArr = [];
//   let i = 0;
//   while (i < nums.length) {
//     if (nums[i] == 0) {
//       let movedZero = nums.splice(nums.indexOf(nums[i]), 1);
//       zeroArr.push(movedZero);
//     } else {
//       i++;
//     }
//   }
//   nums.push(...zeroArr);
// };
