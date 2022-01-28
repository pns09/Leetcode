function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  // O(NlogN + MlogM) | O(N)
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let idxOne = 0;
  let idxTwo = 0;

  let smallest = Infinity;
  let current = Infinity;
  let smallestPair = [];

  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let first = arrayOne[idxOne];
    let second = arrayTwo[idxTwo];

    if (first < second) {
      current = Math.abs(second - first);
      idxOne++;
    } else if (second < first) {
      current = Math.abs(first - second);
      idxTwo++;
    } else {
      return [first, second];
    }

    if (smallest > current) {
      smallest = current;
      smallestPair = [first, second];
    }
  }
  return smallestPair;
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
// output: [28, 26] -> smallest diff between nums in two arrays is 2 which is closer to 0;

// Brute force
function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  // O(N^2) | O(N)
  let map = {};
  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      let diff = Math.abs(arrayOne[i] - arrayTwo[j]);
      map[diff] = [arrayOne[i], arrayTwo[j]];
    }
  }
  let keys = Object.keys(map);
  let smallestDiff = Math.min(...keys);

  return map[smallestDiff];
}
