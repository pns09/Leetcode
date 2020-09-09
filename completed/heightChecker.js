/**
 * @param {number[]} heights
 * @return {number}
 */

var heightChecker = function (heights) {
	let heightsCopy = heights.splice(0).sort((a, b) => a - b);
	let count = 0;

	for (i = 0; i < heights.length; i++) {
		if (heights[i] !== heightsCopy[i]) count = count + 1;
	}

	return count;
};

console.log(heightChecker([]));
