// Greedy method - not my solution.
var intToRoman = function (num) {
	let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	let symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
	let romanStr = "";
	for (let i = 0; i < symbols.length && num >= 0; i++) {
		while (values[i] <= num) {
			num -= values[i];
			romanStr += symbols[i];
		}
	}
	return romanStr;
};

console.log(intToRoman(1994));
