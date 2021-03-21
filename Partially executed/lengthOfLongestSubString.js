/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	if (0 <= s.length <= 5 * 104) {
		let uniqueStr = [...new Set(s.split(""))].join("");
		let i = 0;
		let subStr = "";
		while (i < uniqueStr.length) {
			let startChar = s.indexOf(uniqueStr[i]);
			if (startChar + 1 == s.indexOf(uniqueStr[i + 1])) {
				subStr += uniqueStr[i + 1];
				i++;
			} else{
				uniqueStr.splice(uniqueStr.indexOf(uniqueStr[i]));
			}
		}
		return subStr;
	} else {
		return 0;
	}
};
console.log(lengthOfLongestSubstring((s = "abcabcbb")));

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function (s) {
// 	if (0 <= s.length <= 5 * 104) {
// 		let stringArr = s.split("");
// 		stringArr.sort();
// 		let i = 0;
// 		while (i < stringArr.length) {
// 			if (stringArr[i] == stringArr[i + 1]) {
// 				stringArr.splice(stringArr.indexOf(stringArr[i]), 1);
// 			} else {
// 				i++;
// 			}
// 		}
// 		return stringArr.length;
// 	} else {
//         return 0;
//     }
// };
