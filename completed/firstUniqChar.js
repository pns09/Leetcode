/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
	if (s.length == 0) {
		return -1;
	} else if (s.length == 1) {
		return 0;
	}
	let sarr = s.split("");
	let newarr = [...new Set(sarr)];

	if (newarr.length >= 2) {
		for (let i = 0; i < newarr.length; i++) {
			if (s.lastIndexOf(newarr[i]) === s.indexOf(newarr[i])) return s.lastIndexOf(newarr[i]);
		}
		return -1;
	} else {
		return -1;
	}
};

console.log(firstUniqChar("cc"));

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

// Faster and Easy javascript solution
// var firstUniqChar = function (s) {
// 	for (var i = 0; i < s.length; i++) {
// 		if (s.indexOf(s.charAt(i)) === s.lastIndexOf(s.charAt(i))) {
// 			return i;
// 		}
// 	}
// 	return -1;
// };

// Using hash map method
// var firstUniqChar = function (s) {
// 	var map = new Map();
// 	for (i = 0; i < s.length; i++) {
// 		if (map.has(s[i])) {
// 			map.set(s[i], 2);
// 		} else {
// 			map.set(s[i], 1);
// 		}
// 	}

// 	for (i = 0; i < s.length; i++) {
// 		if (map.has(s[i]) && map.get(s[i]) === 1) {
// 			return i;
// 		}
// 	}
// 	return -1;
// };

// ------------------------------------------------------------------------------------------------------------------------------------------------------

// 99/104 test cases passed with below solution
// var firstUniqChar = function (s) {
// 	if (s.length == 0) {
// 		return -1;
// 	} else if (s.length == 1) {
// 		return 0;
// 	}
// 	let sarr = s.split("");
// 	let newarr = [...new Set(sarr)];

// 	if (newarr.length >= 2) {
// 		let finalarr = [];
// 		for (let i = 0; i < newarr.length; i++) {
// 			finalarr.push(s.lastIndexOf(newarr[i]));
// 		}
// 		let indexNum = Math.min(...finalarr);
// 		let arr2 = [];
// 		for (let i = 0; i < s.length; i++) {
// 			if (s[i] === s[indexNum]) {
// 				arr2.push(s[i]);
// 			}
// 		}
// 		if (arr2.length > 1) {
// 			return -1;
// 		} else {
// 			return indexNum;
// 		}
// 	} else {
// 		return -1;
// 	}
// };

// 74/104 test cases passed with below solution
// var firstUniqChar = function (s) {
// 	if (s.length <= 0) {
// 		return -1;
// 	}
// 	let sarr = s.split("").sort();
// 	let newarr = [];
// 	let i = 0;
// 	while (i < sarr.length) {
// 		if (sarr[i] == sarr[i + 1]) {
// 			sarr.splice(i, 1);
// 		} else {
// 			newarr.push(sarr[i]);
// 			i++;
// 		}
// 	}
// 	if (newarr.length > 0) {
// 		let finalarr = [];
// 		for (let i = 0; i < newarr.length; i++) {
// 			finalarr.push(s.lastIndexOf(newarr[i]));
// 		}
// 		// console.log(finalarr);
// 		return Math.min(...finalarr);
// 	} else {
// 		return -1;
// 	}
// };

