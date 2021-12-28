function hourGlass(arr) {
  // we could set this to 3 given the problems constraings, but this allows changes
  maxX = 3; // + (arr[0].length % 3)
  maxY = 3; // + (arr.length % 3)
  total = -Infinity; // has to be -64, but

  // begin at row = 0 and col = 0
  for (let row = 0; row <= maxY; row++) {
    for (let col = 0; col <= maxX; col++) {
      // sum the top of hourglass
      let sum = arr[row][col] + arr[row][col + 1] + arr[row][col + 2];

      // get the middle of hourglass
      sum += arr[row + 1][col + 1];

      // sum the bottom of hourglass
      sum += arr[row + 2][col] + arr[row + 2][col + 1] + arr[row + 2][col + 2];

      // don't store result to keep space complexity down
      if (total < sum) total = sum;
    }
  }
  return total;
}

console.log(
  hourGlass([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ])
);

// output: 19
