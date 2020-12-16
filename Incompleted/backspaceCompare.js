// My solution
var backspaceCompare = function (S, T) {
	for (let i = 0; i < S.length; i++) {
		if (S.charAt(i) == "#") {
			let beforeChar = S.charAt(i - 1);
			S = S.replace("#", "").replace(beforeChar, "");
		}
	}
	for (let i = 0; i < T.length; i++) {
		if (T.charAt(i) == "#") {
			let beforeChar = T.charAt(i - 1);
			T = T.replace("#", "").replace(beforeChar, "");
		}
	}
	if (S == T) {
		return true;
	} else {
		return false;
	}
};

console.log(backspaceCompare("ab##", "c#d#"));

// ---------------------------------------------------------------------------------------------
// Leetcode solution - easy
// var backspaceCompare = function (S, T) {
// 	return reformatString(S) === reformatString(T);

// 	function reformatString(s) {
// 		var res = [];
// 		var str = s.split("");
// 		for (var i = 0; i < str.length; i++) {
// 			if (str[i] != "#") {
// 				res.push(str[i]);
// 			} else if (str[i] == "#") {
// 				res.pop();
// 			}
// 		}
// 		return res.join("");
// 	}
// };
// console.log(backspaceCompare("ab##", "c#d#"));

// ---------------------------------------------------------------------------------------------
// Bugga's solution:
// var backspaceCompare = function(S, T) {
//     let first = 0, second = 0;
//     for(let index = 0; index < S.length; index++) {
//         if (S.charAt(index) === "#") {
//             if (first > 0) {
//                 first = first - 1;
//             }
//         } else {
//             S[first] = S.charAt(index);
//             first = first + 1;
//         }
//     }

//     for(let index = 0; index < T.length; index++) {
//        if (T.charAt(index) === "#") {
//             if (second > 0) {
//                 second = second - 1;
//             }
//         } else {
//             T[second] = T.charAt(index);
//             second = second + 1;
//         }
//     }

//     if (first === second) {
//         for(let index = 0; index < first; index++) {
//             if (S[index] !== T[index]) {
//                 return false;
//             }
//         }
//         return true;
//     }

//     return false;
// };
