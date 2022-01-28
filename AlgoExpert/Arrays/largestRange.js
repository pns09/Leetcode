function largestRange(array) {
  // Write your code here.
  // O(N) | O(N);
  let map = {};
  let res = [];

  for (let i = 0; i < array.length; i++) {
    map[array[i]] = array[i];
  }

  let max = 0;
  for (let i = 0; i < array.length; i++) {
    let currNum = array[i];

    if (map[currNum - 1] === undefined) {
      let startNum = currNum;
      let count = 0;

      while (map[currNum] !== undefined) {
        currNum++;
        count++;
      }

      if (count > max) {
        max = count;
        res = [startNum, map[currNum - 1]];
      }
    }
  }
  return res;
}

console.log(largestRange([1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]));
// [0,7]
