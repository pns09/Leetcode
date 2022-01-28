/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  // O(nlogn) | O(n)
  if (intervals.length < 2) return intervals.length;

  intervals.sort((a, b) => a[0] - b[0]);

  let endTimes = [intervals[0][1]]; // 30

  for (let i = 1; i < intervals.length; i++) {
    let [start, end] = [...intervals[i]]; // 5, 10
    let earliestTime = Math.min(...endTimes); // 30 -> 10
    if (start < earliestTime) {
      endTimes.push(end);
    } else {
      endTimes[endTimes.indexOf(earliestTime)] = end; // update end time as meeting ended and we dont need to open new room
    }
  }
  return endTimes.length;
};

console.log(
  minMeetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);
// output : 2

// 2
var minMeetingRooms = function (intervals) {
  const starts = intervals.map((x) => x[0]);
  const ends = intervals.map((x) => x[1]);

  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);

  let roomsNeeded = 0,
    e = 0;

  for (let s = 0; s < starts.length; s++) {
    if (starts[s] >= ends[e]) {
      roomsNeeded--;
      e++;
    }
    roomsNeeded++;
  }
  return roomsNeeded;
};

console.log(
  minMeetingRooms([
    [1, 10],
    [2, 7],
    [3, 19],
    [8, 12],
    [10, 20],
    [11, 30],
  ])
);
