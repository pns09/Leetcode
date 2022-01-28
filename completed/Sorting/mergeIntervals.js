/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  let currIndex = intervals[0];
  let mergedIntervals = [currIndex];

  for (let i = 1; i < intervals.length; i++) {
    let newIndex = intervals[i];
    if (currIndex[1] >= newIndex[0]) {
      currIndex[1] = Math.max(currIndex[1], newIndex[1]);
    } else {
      mergedIntervals.push(newIndex);
      currIndex = newIndex;
    }
  }

  return mergedIntervals;
};

console.log(
  merge([
    [2, 3],
    [2, 2],
    [3, 3],
    [1, 3],
    [5, 7],
    [2, 2],
    [4, 6],
  ])
);
// [[1,4],[5,6]] -> [[1,4],[5,6]]

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
