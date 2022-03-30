/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
   return all possible combinations of k numbers out of the range [1, n].
 */
var combine = function (n, k) {
  let res = [];
  let temp = [];
  backtrack(1, n, k, temp, res);
  return res;
};

const backtrack = (index, n, k, temp, res) => {
  if (temp.length === k) {
    res.push([...temp]);
    return;
  } else {
    for (let i = index; i <= n; i++) {
      temp.push(i);
      backtrack(i + 1, n, k, temp, res); // send i + 1 as index to eliminate duplicate values - (not index + 1)
      temp.pop();
    }
  }
};

console.log(combine(3, 2));
// output: [[1,2],[1,3],[2,3]]
