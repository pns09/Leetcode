/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
	let newArr = [];

	for (let j = 0; j < pieces.length; j++) {
		let number = arr.indexOf(pieces[j]);
		newArr[number] = pieces[j];
	}

	for (let i = 0; i < newArr.length; i++) {
		if (arr[i] !== newArr[i]) {
			return false;
		}
	}
	return true;
};

console.log(canFormArray([91, 4, 64, 78], [[78], [4, 64], [91]]));
