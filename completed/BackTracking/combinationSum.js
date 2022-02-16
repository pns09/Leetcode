/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];
  let temp = [];
  backtrack(candidates, target, res, temp, 0);
  return res;
};

const backtrack = (candidates, target, res, temp, start) => {
  if (target === 0) {
    res.push(temp.slice());
    return;
  } else if (target < 0) return;
  else {
    for (let i = start; i < candidates.length; i++) {
      temp.push(candidates[i]);
      backtrack(candidates, target - candidates[i], res, temp, i);
      temp.pop();
    }
  }
};

console.log(combinationSum([2, 3, 6, 7], (target = 7)));

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
