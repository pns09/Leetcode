/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // O(N) | O(1)
  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      const temp = nums[i];
      nums[i] = nums[start];
      nums[start] = temp;
      start++;
    }
  }

  let end = nums.length - 1;
  for (let i = end; i >= 0; i--) {
    if (nums[i] === 2) {
      const temp = nums[i];
      nums[i] = nums[end];
      nums[end] = temp;
      end--;
    }
  }
};
console.log(sortColors([2, 0, 2, 1, 1, 0]));

// using extra space - Array and HashMap
// var sortColors = function (nums) {
//   let map = {};
//   let res = [];

//   for (let i = 0; i < nums.length; i++) {
//     map[nums[i]] = (map[nums[i]] || 0) + 1;
//   }

//   let startCount = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0 && map[nums[i]]) {
//       let currNumCount = map[nums[i]];
//       while (currNumCount) {
//         res[startCount] = 0;
//         currNumCount--;
//         startCount++;
//       }
//       break;
//     }
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 1 && map[nums[i]]) {
//       let currNumCount = map[nums[i]];
//       while (currNumCount) {
//         res[startCount] = 1;
//         currNumCount--;
//         startCount++;
//       }
//       break;
//     }
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 2 && map[nums[i]]) {
//       let currNumCount = map[nums[i]];
//       while (currNumCount) {
//         res[startCount] = 2;
//         currNumCount--;
//         startCount++;
//       }
//       break;
//     }
//   }
//   console.log(res);
// };
