/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const map = new Map([[0, 1]]);
  let sum = 0;
  let total = 0;
  for (let num of nums) {
    sum = sum + num;
    total += map.get(sum - k) || 0;
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return total;
};
console.log(subarraySum((nums = [1, 2, 3]), (k = 3)));

// /**
//  * @param {string[]} arr
//  * @return {number}
//  */
// const checkDuplicate = (str) => {
//   let map = {};
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (!map[str[i]]) {
//       map[str[i]] = str[i];
//       count++;
//     } else return 0;
//   }
//   return count;
// };

// var maxLength = function (arr) {
//   if (arr.length <= 1) {
//     return checkDuplicate(arr[0]);
//   }
//   let maxLen = 0;
//   let max = 0;
//   let continuousStr = '';
//   let subsequence = '';

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       subsequence = arr[i] + arr[j];
//       max = checkDuplicate(subsequence);
//       if (max != 0) {
//         subsequence += subsequence;
//       }
//       maxLen += Math.max(max, maxLen);
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     continuousStr += arr[i];
//   }

//   let value = checkDuplicate(continuousStr);
//   if (value > maxLen) return value;
//   else return maxLen;
// };

// console.log(maxLength(["cha","r","act","ers"]));

// function solution(A) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   let count = 0;
//   let max = Math.pow(10, 9);
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] == 0) {
//       for (let j = i + 1; j < A.length; j++) {
//         if (A[i] != A[j]) count++;
//       }
//      }
//   }

//   if (count >= max) return -1;
//   else return count;
// }
// console.log(solution([1, 0, 1, 1, 1]));
