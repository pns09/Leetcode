function sortedSquaredArray(array) {
  // Write your code here.
  // O(N) | O(N) - two pointer approach.
  let res = Array(array.length).fill(0);
  let left = 0;
  let right = array.length - 1;
  for (let i = array.length - 1; i >= 0; i--) {
    if (Math.abs(array[left]) > Math.abs(array[right])) {
      res[i] = array[left] * array[left];
      left++;
    } else {
      res[i] = array[right] * array[right];
      right--;
    }
  }
  return res;
}

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));
// output: [1, 4, 9, 25, 36, 64, 81];

// 2 Sorting
function sortedSquaredArray(array) {
  // Write your code here.
  // O(NlogN) | O(N)
  let res = [];
  for (let i = 0; i < res.length; i++) {
    let square = array[i] * array[i];
    res.push(square);
  }
  return res.sort((a, b) => a - b);
}
