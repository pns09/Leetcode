function isMonotonic(array) {
  // Write your code here.
  // 	O(n) time | O(1) space
  let currentPointer = array[0];
  let nextPointer = array[1];
  if (nextPointer >= currentPointer) {
    for (let i = 1; i < array.length; i++) {
      if (Math.abs(currentPointer) <= Math.abs(array[i])) {
        currentPointer = Math.abs(array[i]);
      } else return false;
    }
  } else {
    for (let i = 1; i < array.length; i++) {
      if (currentPointer >= array[i]) {
        currentPointer = array[i];
      } else return false;
    }
  }
  return true;
}

console.log([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]);

// output : true
// monotonic array - array elements, from left to right are either non-increasing or non-decreasing.
