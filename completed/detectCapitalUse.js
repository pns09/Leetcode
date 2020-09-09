// 550 / 550 test cases passed.
// Status: Accepted
// Runtime: 104 ms
// Memory Usage: 36.7 MB
// Your runtime beats 19.26 % of javascript submissions

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
	if (word === word.toUpperCase()) {
		return true;
	} else if (word === word.toLowerCase()) {
		return true;
	} else if (word[0] === word[0].toUpperCase()) {
		let searchForAllLower = word.substr(1, word.length - 1);
		if (searchForAllLower === searchForAllLower.toLowerCase()) return true;
		else return false;
	} else {
		return false;
	}
};

console.log(detectCapitalUse("sRI"));
