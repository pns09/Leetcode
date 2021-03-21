/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
function minCost(s, cost) {
	let costcount = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] == s[i + 1]) {
			costcount += cost[i] > cost[i + 1] ? cost[i + 1] : cost[i];
		}
	}
	return costcount;
}

console.log(minCost("aaa", [3, 5, 10]));


// Leetcode solution -didn't understand.
// var minCost = function (s, cost) {
// 	const pq = new PQ((a, b) => a <= b);
// 	let res = 0;
// 	for (let i = 0; i < s.length; i++) {
// 		let sum = cost[i];
// 		let currMax = cost[i];
// 		while (s[i] === s[i + 1]) {
// 			currMax = Math.max(currMax, cost[i + 1]);
// 			sum += cost[i + 1];
// 			i++;
// 		}
// 		res += sum - currMax;
// 	}

// 	return res;
// };
