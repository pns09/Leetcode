// My solution - not submitted 50/90 cases passed! - need to learn the implementation of reduce method.
// var isValid = function (s) {
// 	if (s === null || s.length <= 0) return true;
// 	let bracketsArr = s.split("");

// 	let result = bracketsArr.reduce((prevBracket, currentBracket) => {
// 		if (currentBracket == "(" || currentBracket == "{" || currentBracket == "[") {
// 			return ++prevBracket;
// 		} else {
// 			return --prevBracket;
// 		}
// 	}, 0);
// 	if (result > 0) {
// 		return false;
// 	} else {
// 		return true;
// 	}
// };
// console.log(isValid("{[}]"));

//somebody's solution - using array push and pop methods
var isValid = function (s) {
	let stack = [];
	for (let i = 0; i < s.length; i++) {
		let char = s[i];
		if (char == "(") stack.push(")");
		else if (char == "{") stack.push("}");
		else if (char == "[") stack.push("]");
		else {
			if (stack.pop() !== char) return false;
		}
	}
	return stack.length == 0;
};
