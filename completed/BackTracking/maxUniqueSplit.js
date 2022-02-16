/**
 * @param {string} s
 * @return {number}
 */
// Backtracking approach
var maxUniqueSplit = function (s) {
  // O(N^2) | O(N)
  let set = new Set();
  return backtrack(s, set);
};

const backtrack = (s, set) => {
  if (s.length === 0) {
    return set.size;
  } else {
    let max = 0;
    for (let i = 1; i <= s.length; i++) {
      let str = s.substring(0, i);

      if (!set.has(str)) {
        set.add(str);
        let res = backtrack(s.substring(i), set); // backtrack by senfing full str after ith char
        max = Math.max(max, res);
        set.delete(str); // delete the str which is at end from the set.
      }
    }
    return max;
  }
};

console.log(maxUniqueSplit('wwwzfvedwfvhsww'));
// output : 11
// my output : 10
// wwwzfvedwfvhsww
