function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
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
console.log(smallestDifference([10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123], [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]));

// output: [-123,-124]