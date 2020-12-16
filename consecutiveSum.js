// var consecutiveNumbersSum = function (N) {
// 	var result = 0;
// 	var i = 1;
// 	while (true) {
// 		var eq = N - (i * (i - 1)) / 2;
// 		if (eq <= 0) break;
// 		if (eq % i == 0) {
// 			result++;
// 		}
// 		i++;
// 	}
// 	return result;
// };

function consecutiveNumbersSum(N) {
    let count = 0;
	let upper_limit = Math.round(Math.sqrt(2 * N + 0.25) - 0.5);
	for (let k = 1; k <= upper_limit; ++k) {
		let sum_natural_num = (k * (k + 1)) / 2;
		if (N - (sum_natural_num % k) == 0) count++;
	}
	return count;
}

console.log(consecutiveNumbersSum(15));
