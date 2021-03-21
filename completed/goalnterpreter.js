// My solution #1
// Can also try replacing the interpretStrArr = [] with interpretStr = '';
/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
	let interpretStrArr = [];
	let splitCmd = command.split("");

	for (let i = 0; i < splitCmd.length; i++) {
		if (splitCmd[i] == "G") {
			interpretStrArr.push(splitCmd[i]);
		} else if (splitCmd[i] == "(" && splitCmd[i + 1] == ")") {
			interpretStrArr.push("o");
		} else if (splitCmd[i] == "(" && splitCmd[i + 1] == "a") {
			interpretStrArr.push("al");
		}
	}

	return interpretStrArr.join("");
};

console.log(interpret("G()(al)"));

// From leetcode - easy solution
// var interpret = function (command) {
// 	return command.split("()").join("o").split("(al)").join("al");
// };

// Leetcode #2
// var interpret = function (command) {
// 	var sb = "";
// 	for (var i = 0; i < command.length; i++) {
// 		if (command.charAt(i) == "G") {
// 			sb += "G";
// 		} else if (i + 1 < command.length && command.charAt(i + 1) == ")") {
// 			sb += "o";
// 			i++;
// 		} else {
// 			sb += "al";
// 			i = i + 3;
// 		}
// 	}
// 	return sb.toString();
// };
