/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let count = 0;
  let currInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i];
    if (interval[0] < currInterval[1]) {
      if (currInterval[1] > interval[1]) currInterval = interval;
      count++;
    } else {
      currInterval = interval;
    }
  }
  return count;
};

console.log(eraseOverlapIntervals(intervals));

// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
