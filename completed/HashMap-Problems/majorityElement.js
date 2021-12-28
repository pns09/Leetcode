/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
	// O(n) | O(n)
	if(nums.length == 1) return nums[0];
	
	let half = nums.length/2;
	let map = new Map();
	
	for(let i=0; i<nums.length; i++) {
	  let currNum = nums[i]
	  if(!map.has(currNum)) {
		map.set(currNum, 1)
	  } else {
		map.set(currNum, map.get(currNum) + 1);
	  }
	  
	  if(map.get(currNum) > half) {
		return currNum;
	  }
	}
	return -1;
  };

// My solution for majority element finder - 80 ms, 
// faster than 91.29% of JavaScript online submissions
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length >= 2) {
    if (nums.length % 2 == 0) {
      nums.sort();
      return nums[nums.length / 2];
    } else {
      nums.sort();
      nums.unshift(0);
      return nums[nums.length / 2];
    }
  } else {
    return nums[0];
  }
};

console.log(majorityElement([-1, -1, 2147483647]));

// Booyer Moore voting algorithm - Follow this method for finding majority element in an array.
var majorityElement = function (nums) {
  let majorityNumber = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      majorityNumber = nums[i];
    }
    count = nums[i] === majorityNumber ? count + 1 : count - 1;
  }
  return majorityNumber;
};
