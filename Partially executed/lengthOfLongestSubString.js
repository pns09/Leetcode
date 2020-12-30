/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	if (0 <= s.length <= 5 * 104) {
		let uniqueStr = [...new Set(s.split(""))].join("");
		if (s.search(uniqueStr) > 0) {
			return uniqueStr.length;
		} else {
			for (let i = 0; i < uniqueStr.length; i++) {
				let removeFirstChar = uniqueStr.substring(1);
				if (s.search(removeFirstChar) > 0) {
					return removeFirstChar.length;
				}
			}
		}
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