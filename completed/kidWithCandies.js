// My solution.
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
	let greatestNumber = Math.max(...candies);
	for (let i = 0; i < candies.length; i++) {
		if (candies[i] + extraCandies >= greatestNumber) {
			candies[i] = true;
		} else candies[i] = false;
	}
	return candies;
};

console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
