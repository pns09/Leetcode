/**
 * @param {string} s
 * @return {string}
 */
// use a while loop while removing characters from string. O(n)
var removeVowels = function (s) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let i = 0;
  s = s.toLowerCase();
  while (i < s.length) {
    if (vowels.includes(s[i])) {
      s = s.slice(0, i) + s.slice(i + 1);
    } else i++;
  }
  return s;
};

// easy regex solution - will also check for case sensitivity in a string and replaces it.
// var removeVowels = function (s) {
//   return s.replace(/[aeiou]/gi, '');
// };

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

console.log(removeVowels('leEtcodeisacommunityforcoders'));
