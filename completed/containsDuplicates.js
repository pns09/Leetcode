// My solution #1
/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function (s) {
	let sarr = s.split("");
	let i = 0;
	while (i < s.length) {
		if (sarr[i] == "a" || sarr[i] == "e" || sarr[i] == "i" || sarr[i] == "o" || sarr[i] == "u") {
			sarr.splice(i, 1);
		} else i++;
	}
	return sarr.join("");
};

// Leetcode solution without splitting the string.
// var removeVowels = function (s) {
// 	let notVowelsStr = "";
// 	for (let i = 0; i < s.length; i++) {
// 		if (s[i] !== "a" && s[i] !== "e" && s[i] !== "i" && s[i] !== "o" && s[i] !== "u") {
// 			notVowelsStr += s[i];
// 		}
// 	}

// 	return notVowelsStr;
// };

console.log(removeVowels("leetcodeisacommunityforcoders"));
