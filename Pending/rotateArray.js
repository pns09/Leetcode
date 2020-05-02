// My solution - 27/34 test cases passes
var rotate = function(nums, k) {
  if (k === 0 || k === nums.length) return nums;
  if (nums.length < k) {
    nums.unshift(nums.pop());
    return nums;
  }
  for (var i = 1; i < nums.length; i++) {
    let popped = nums.pop();
    nums.unshift(popped);
    if (i === k) {
      return nums;
    }
  }
};

// Simple solution to understand! - understand while loop in this example.
// let rotate = function(nums, k) {
//   k = k % nums.length;
//   while (k > 0) {
//     nums.unshift(nums.pop());
//     k--;
//   }
// };

// Optimised solution
// var rotate = function(nums, k) {
//   k %= nums.length;
//   if (k === 0) return;
//   nums.unshift(...nums.splice(-5));
//   return nums;
// };

console.log(rotate([1, 2, 3, 4, 5, 6], 10));
