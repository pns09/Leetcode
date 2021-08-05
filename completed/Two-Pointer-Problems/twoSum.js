// Brute Force - O(n^2)
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++)
//       if (nums[i] + nums[j] == target) {
//         return [i, j];
//       }
//   }
// };

// 2
// Two Pointer approach - O(n log n) - beacuse of array sorting.
// var twoSum = function (nums, target) {
//   let sortedNums = nums.sort((a, b) => a - b);
//   let pointer1 = 0;
//   let pointer2 = nums.length - 1;

//   while (pointer1 < pointer2) {
//     let sum = sortedNums[pointer1] + sortedNums[pointer2];
//     if (sum > target) {
//       pointer2--;
//     } else if (sum < target) {
//       pointer1++;
//     } else {
//       return [nums.indexOf(sortedNums[pointer1]), nums.lastIndexOf(sortedNums[pointer2])];
//     }
//   }
// };

// console.log(twoSum([2, 5, 5, 11], 10));

// 3
// var twoSum = function (nums, target) {
//   let mapObj = {};

//   for (let i = 0; i < nums.length; i++) {
//     mapObj[nums[i]] = i;
//   }

//   for (let i = 0; i < nums.length; i++) {
//     let currentNum = nums[i];
//     let requiredNum = target - currentNum;
//     if(mapObj[requiredNum] && mapObj[requiredNum] !== i) {
//       return [i, mapObj[requiredNum]];
//     }
//   }
// };
// console.log(twoSum([2, 5, 5, 11], 10));
