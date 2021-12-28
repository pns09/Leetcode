// Use of while loop is best undrstood here to remove duplicates "in-place". Easy to interpret.
// Note this only good for sorted elements in an array. not for all the combination.
var removeDuplicates = function (nums) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] == nums[i + 1]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  console.log(nums);
  return nums.length;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// Working solution - TWO POINTER ALGORITHM.
var removeDuplicates = function (nums) {
  if (nums.length == 0) return 0;
  var i = 0;
  for (var j = 1; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return nums;
};

// Bugga's solution. 3 pointers - 100% faster than all solutions. - NOT SURE IF THIS IS CORRECT - CHECK AGAIN
var removeDuplicates = function (nums) {
  let activeIndex = 1;
  let loopCount = 1;

  for (let index = 1; index < nums.length; index++) {
    if (nums[index] !== nums[index - 1]) {
      loopCount = 1;
    } else {
      loopCount = loopCount + 1;
    }
    if (loopCount <= 2) {
      nums[activeIndex] = nums[index];
      activeIndex = activeIndex + 1;
    }
  }

  return activeIndex;
};

// This is the simplest way to remove duplicates but filter method creates new array which we dont want in this case.
// nums = nums.filter((value, index, nums) => {
//   return nums.indexOf(value) === index;
// });

// Hacky and simple way to remove duplicates in array
// var removeDuplicates = function(nums) {
//   return nums.splice(0, nums.length, ...new Set(nums));
// };
// console.log(removeDuplicates([0, 1, 1, 1, 2, 2, 3, 4]));
