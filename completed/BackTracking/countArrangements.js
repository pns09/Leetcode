/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function (n) {
  let count = 0;
  let visited = Array(n + 1).fill(false);

  const backtrack = (n, index, visited) => {
    if (index > n) {
      count++;
      return;
    } else {
      for (let i = 1; i <= n; i++) {
        if (!visited[i] && (index % i === 0 || i % index === 0)) {
          visited[i] = true;
          backtrack(n, index + 1, visited);
          visited[i] = false;
        }
      }
    }
  };
  backtrack(n, 1, visited, count);
  return count;
};

console.log(countArrangement(2));
// Input: n = 2
// Output: 2
// Explanation:
// The first beautiful arrangement is [1,2]:
//     - perm[1] = 1 is divisible by i = 1
//     - perm[2] = 2 is divisible by i = 2
// The second beautiful arrangement is [2,1]:
//     - perm[1] = 2 is divisible by i = 1
//     - i = 2 is divisible by perm[2] = 1
