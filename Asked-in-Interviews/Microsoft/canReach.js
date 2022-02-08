// You are given an array of non-negative integers arr and a start index.
// When you are at an index i, you can move left or right by arr[i].
//  Your task is to figure out if you can reach value 0.
function canReach(arr, start) {
  if (start < 0 || start > arr.length - 1 || arr[start] === -1) return false;
  const val = arr[start];

  if (val === 0) return true;

  arr[start] = -1;
  return canReach(arr, start + val) || canReach(arr, start - val);
}

console.log(canReach([3, 4, 2, 3, 0, 3, 1, 2, 1], start = 7))
// Input: arr = [3, 4, 2, 3, 0, 3, 1, 2, 1], start = 7
// Output: true
// Explanation: left -> left -> right