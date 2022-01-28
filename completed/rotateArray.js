/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    for(let i=0; i<k; i++) { 
     // let lastElm = nums.pop();
      nums.splice(0, 0, nums.pop());
    }
  return nums; 
};

console.log(rotate([[1,2,3,4,5,6,7]]));