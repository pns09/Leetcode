// My solution - 98/113 testcases passed
var removeElement = function(nums, val) {
  let j = 0;
  for (let i = 1; i < nums.length; i++) {
    if (val === nums[i]) {
      nums.splice(i, 1);
      j++;
    }
    // if (nums[j] == undefined) {
    //   nums.splice(0, 1);
    // }
    if (val === nums[j]) {
      nums.splice(j, 1);
    }
  }
  if (nums[0] === val) {
    nums.splice(0, 1);
    return nums;
  }
  return nums
};

console.log(removeElement([4,2,0,2,2,1,4,4,1,4,3,2],4));

// optimised 2 line solution --- but has O(n^2)
// var removeElement = function(nums, val) {
//     while (nums.includes(val)){
//         nums.splice(nums.indexOf(val),1);
//     }
//     return nums.length;
// };

// Linear Solution without 2 for loops
var removeElement = function(nums, val) {
    let j = 0;
    
    for(let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        nums[j] = nums[i];
        j++;
      }
    }
    
    return j;
  };