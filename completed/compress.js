/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
	let compressedArr = [];
	let count = 0;
	let current = null;
	for (let i = 0; i < chars.length; i++) {
		if (chars[i] != current) {
			if (count > 0) {
				compressedArr.push(current, count);
			}
			current = chars[i];
			count = 1;
		} else {
			count++;
		}
		if (i == chars.length - 1) {
			compressedArr.push(current, count);
			return compressedArr.map((val) => {
				return val + "";
			});
		}
	}
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
