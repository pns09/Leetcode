// My solution.
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
	// let arr = Array(s.length).fill(0); // using array fill to populate the res array
	let result = [];

	for (let i = 0; i < s.length; i++) {
		result[indices[i]] = s[i];
	}
	return result.join("");
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));

// Leetcode solution using reduce method. Learn to use reduce where applicable.
// var restoreString = function(s, indices) {
//     return indices.reduce((acc,curr,i) => {
//         acc[curr] = s[i];
//         return acc;
//     },[])
//     .join('');
// };
