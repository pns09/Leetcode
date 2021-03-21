// My solution 47/47 testcases passed - took 104ms beats only 16.8% - check my last solution 
// check how to get the count of duplicate elements in the array and print most repeated element.
// when slicing an array always remember to use while loop and increment count manually.
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
	let paragraphArr = paragraph
		.toLowerCase()
		.split(/[ !?',;.]/)
		.sort();

	let k = 0;
	while (k < paragraphArr.length) {
		if (paragraphArr[k] == "") {
			paragraphArr.splice(paragraphArr.indexOf(paragraphArr[k]), 1);
		} else {
			k++;
		}
	}

	let i = 0;
	while (i < paragraphArr.length) {
		if (paragraphArr.indexOf(banned[i]) >= 0) {
			paragraphArr.splice(paragraphArr.indexOf(banned[i]), 1);
		} else {
			i++;
		}
	}

	let map = {};
	for (let i = 0; i < paragraphArr.length; i++) {
		map[paragraphArr[i]] = (map[paragraphArr[i]] || 0) + 1;
	}

	return Object.keys(map).reduce(function (a, b) {
		return map[a] > map[b] ? a : b;
	});
};

// var mostCommonWord = function(paragraph, banned) {
//   let most;
//   const map = {};
//   const words = paragraph.toLowerCase().split(/[ !?',;.]/);
//   words.forEach(w => {
//     if (w && !banned.includes(w)) {
//       map[w] = (map[w] || 0) + 1;
//       if (!most || map[w] > map[most]) most = w;
//     }
//   });
//   return most;
// };


// ------------------------------------------------------------------------------------------------------------------------
// My solution - check on how to get the most repeated emelent from sorted array below.
 /* @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
// var mostCommonWord = function (paragraph, banned) {
// 	let count = 0;
// 	let frequentWordCount = 1;
// 	let frequentWord = "";

// 	let paragraphArr = paragraph
// 		.toLowerCase()
// 		.split(/[ !?',;.]/)
// 		.sort();

// 	let k = 0;
// 	while (k < paragraphArr.length) {
// 		if (paragraphArr[k] == "") {
// 			paragraphArr.splice(paragraphArr.indexOf(paragraphArr[k]), 1);
// 		} else {
// 			k++;
// 		}
// 	}

// 	let i = 0;
// 	while (i < paragraphArr.length) {
// 		if (paragraphArr.indexOf(banned[i]) >= 0) {
// 			paragraphArr.splice(paragraphArr.indexOf(banned[i]), 1);
// 		} else {
// 			i++;
// 		}
// 	}

//     // get the highest repeated element from sorted array - follow below
// 	for (let i = 0; i < paragraphArr.length; i++) {
// 		for (let j = 0; j < paragraphArr.length; j++) {
// 			if (paragraphArr[i] == paragraphArr[j]) {
// 				count++;
// 				if (count >= frequentWordCount) {
// 					frequentWordCount = count;
// 					frequentWord = paragraphArr[i];
// 				}
// 			}
// 		}
// 		count = 0;
// 	}

// 	return frequentWord;
// };

console.log(mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"]));
