const calculateDays = (report) => {
  let seenMap = {};

  for (let i = 0; i < report.length; i++) {
    for (let j = 0; j < report[i].length; j++) {
      const [start, end] = report[i][j];

      for (let k = start; k <= end; k++) {
        if (!seenMap[k]) {
          seenMap[k] = true;
        }
      }
    }
  }
  return Object.keys(seenMap).length; // 6
};

console.log(
  calculateDays([
    [[3, 5]],
    [
      [1, 1],
      [5, 5],
    ],
    [
      [0, 1],
      [5, 6],
    ],
  ])
);
