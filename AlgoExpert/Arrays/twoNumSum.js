function twoNumberSum(array, targetSum) {
  // Write your code here.
  // O(N) | O(N)

  let map = {};
  for (let i = 0; i < array.length; i++) {
    map[array[i]] = array[i];
  }

  for (let i = 0; i < array.length; i++) {
    let diff = targetSum - array[i];
    if (map[diff] && array[i] !== diff) {
      return [array[i], diff];
    }
  }
  return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

// 2
function twoNumberSum(array, targetSum) {
  // Write your code here.
  // O(N) | O(N)
  let map = {};
  for (let i = 0; i < array.length; i++) {
    let diff = targetSum - array[i];
    if (map[diff]) {
      return [array[i], diff];
    } else map[array[i]] = true;
  }

  return [];
}
