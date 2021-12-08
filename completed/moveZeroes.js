// Two Pointer Approach - in place approach - without creating new Arr
var moveZeroes = function (nums) {
	let i = 0;
	let counter = 0;
	while (counter < nums.length) {
	  if (nums[i] === 0) {
		nums.push(...nums.splice(i, 1));
	  } else {
		i++;
	  }
	  counter++
	}
	return nums;
  };
  
  console.log(moveZeroes([0, 0, 1]));
  
// By using extra space -
var moveZeroes = function (nums) {
	let zeroArr = [];
	let i = 0;
	while (i < nums.length) {
		if (nums[i] == 0) {
			let movedZero = nums.splice(nums.indexOf(nums[i]), 1);
			zeroArr.push(movedZero);
		} else {
			i++;
		}
	}
	nums.push(...zeroArr);
};
