function firstDuplicateValue(array) {
  // O(N) | O(1) - no space used
  for (let i = 0; i < array.length; i++) {
    const val = Math.abs(array[i]);
    if (array[val - 1] < 0) return val;
    array[val - 1] *= -1;
  }

  return -1;
}

console.log(firstDuplicateValue([2, 1, 5, 3, 2, 3, 4]));
// output: 2
// 2 is the first integer that appears more than once.</span>
// 3 also appears more than once, but the second 3 appears after the second 2.</span>

// 2 Using Object
function firstDuplicateValue(array) {
  // Write your code here.
  // O(N) | O(N)
  let map = {};

  for (let i = 0; i < array.length; i++) {
    if (map[array[i]]) return array[i];
    map[array[i]] = true;
  }
  return -1;
}
