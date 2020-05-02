// var removeDuplicates = function(nums) {
//   for (var i = 0; i < nums.length; i++) {
//     // if (nums[i] !== nums[i + 1]) return nums;
//     if (nums[i] === nums[i + 1]) {
//       nums.splice(i, 1);
//     }
//   }

//   return nums;
// };

// Bugga's solution. 3 pointers - 100% faster than all solutions.
var removeDuplicates = function(nums) {
  let activeIndex = 1;
  
  for(let index = 1, loopCount = 1; index < nums.length; index++) {
      if (nums[index] !== nums[index-1]) {
          loopCount = 1;
      } else{
          loopCount = loopCount + 1;
      }
      if (loopCount <= 2) {
          nums[activeIndex] = nums[index];
          activeIndex = activeIndex + 1;
      }
  }
  
  return activeIndex;
};
console.log(removeDuplicates([0, 1, 1, 1, 2, 2, 3, 4]));



// This is the simplest way to remove duplicates but filter method creates new array which we dont want in this case.
// nums = nums.filter((value, index, nums) => {
//   return nums.indexOf(value) === index;
// });


// Working solution - TWO POINTER ALGORITHM.
// var removeDuplicates = function(nums) {
//   if (nums.length == 0) return 0;
//     var i = 0;
//     for (var j = 1; j < nums.length; j++) {
//         if (nums[j] != nums[i]) {
//             i++;
//             nums[i] = nums[j];
//         }
//     }
//     return nums;
// };

// Hacky and simple way to remove duplicates in array
// var removeDuplicates = function(nums) {
//   return nums.splice(0, nums.length, ...new Set(nums));
// };
// console.log(removeDuplicates([0, 1, 1, 1, 2, 2, 3, 4]));

