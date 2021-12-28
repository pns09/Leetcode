// My solution - using 2 new arrays - need to do in-place modification of the given array.
// /**
//  * @param {number[][]} matrix
//  * @return {void} Do not return anything, modify matrix in-place instead.
//  */
var rotate = function (matrix) {
	let ansMatrix = [];
	let length = matrix.length;
	for (let i = 0; i < length; i++) {
		let newMatrix = [];
		for (j = 1; j <= matrix[i].length; j++) {
			newMatrix.push(matrix[length - j][i]);
		}
		ansMatrix.push(newMatrix);
	}
	console.log(ansMatrix);
};

// Accepted solution - transposing and reverse of a matrix method
const rotate = (matrix) => {
	// transpose
	for (let i = 0; i < matrix.length; i++) {
		for (let j = i; j < matrix.length; j++) {
			const tmp = matrix[i][j];
			matrix[i][j] = matrix[j][i];
			matrix[j][i] = tmp;
		}
		// reverse
		matrix[i].reverse();
	}
	// reverse - no need to write a for loop to just perform reverse on an array, do it in the nested loop as above
	// for (let k = 0; k < matrix.length; k++) {
	// 	matrix[k].reverse();
	// }
	console.log(matrix);
};

console.log(
	rotate([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])
);
