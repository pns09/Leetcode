// My solution - Runtime: 76 ms, faster than 98.37% of JavaScript online submissions
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
	let digitLogs = [];
	let wordLogs = [];
	let letterLogs = [];
	let i = 0;
	while (i < logs.length) {
		let firstChar = logs[i].indexOf(" ");
		if (parseInt(logs[i].substr(firstChar + 1, 1)) >= 0) {
			digitLogs.push(logs[i]);
		} else {
			let splitString = logs[i].substring(firstChar, logs[i].length);
			wordLogs.push({ word: splitString, index: logs.indexOf(logs[i]) });
		}
		i++;
	}

	wordLogs.sort((a, b) => (a.word > b.word ? 1 : -1));
	wordLogs.forEach((element) => {
		letterLogs.push(logs[element.index]);
	});
	return letterLogs.concat(...digitLogs);
};

console.log(reorderLogFiles(["7 96", "d 0 5", "r 439", "1 bw", "6 dkf"]));


// Bugga solution -easy to understand - only for comparision

// var reorderLogFiles = function (logs) {
// 	let letterLogs = [];
// 	let numberLogs = [];

// 	for (let log of logs) {
// 		let firstChar = log.indexOf(" ");
// 		if (log.charCodeAt(firstChar + 1) > 65) {
// 			letterLogs.push({
// 				log,
// 				startIndex: firstChar + 1,
// 			});
// 		} else {
// 			numberLogs.push(log);
// 		}
// 	}

// 	letterLogs.sort((a, b) => {
// 		if (a.log.slice(a.startIndex) === b.log.slice(b.startIndex)) {
// 			if (a.log.slice(0, a.startIndex - 1) > b.log.slice(0, b.startIndex - 1)) {
// 				return 1;
// 			} else if (a.log.slice(0, a.startIndex - 1) < b.log.slice(0, b.startIndex - 1)) {
// 				return -1;
// 			} else {
// 				return 0;
// 			}
// 		}

// 		if (a.log.slice(a.startIndex) > b.log.slice(b.startIndex)) {
// 			return 1;
// 		} else if (a.log.slice(a.startIndex) < b.log.slice(b.startIndex)) {
// 			return -1;
// 		} else {
// 			return 0;
// 		}
// 	});

// 	letterLogs = letterLogs.map((a) => a.log);

// 	return [...letterLogs, ...numberLogs];
// };
