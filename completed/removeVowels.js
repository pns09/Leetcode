// My solution #1
/**
 * @param {string} s
 * @return {string}
 */
// var removeVowels = function (s) {
// 	let sarr = s.split("");
// 	let i = 0;
// 	while (i < s.length) {
// 		if (sarr[i] == "a" || sarr[i] == "e" || sarr[i] == "i" || sarr[i] == "o" || sarr[i] == "u") {
// 			sarr.splice(i, 1);
// 		} else i++;
// 	}
// 	return sarr.join("");
// };

// My solution #2
var removeVowels = function (s) {
	let notVowelsStr = "";
	let i = 0;
	while (i < s.length) {
		if (sarr[i] == "a" || sarr[i] == "e" || sarr[i] == "i" || sarr[i] == "o" || sarr[i] == "u") {
			sarr.splice(i, 1);
		} else {
            notVowelsStr += s[i]
			i++;
		}
	}
	return notVowelsStr;
};

console.log(removeVowels("leetcodeisacommunityforcoders"));
