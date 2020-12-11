// 31/34 test cases passed
var isAnagram = function (s, t) {
	if (s.length !== t.length) {
		return false;
	}
	for (let i = 0; i < t.length; i++) {
		if (!t.includes(s[i])) {
			return false;
		}
	}
	return true;
};

console.log(isAnagram("aaca", "acca"));

// one liner Js solution
// var isAnagram = function(s, t) {
//     return s.split('').sort().join() == t.split('').sort().join();
// };
