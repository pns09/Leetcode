function searchForRange(array, target) {
  // 	time -> O(logN)
  // 	space -> O(1);
  let finalRange = [-1, -1];
  alteredBinarySearch(array, target, 0, array.length - 1, finalRange, true);
  alteredBinarySearch(array, target, 0, array.length - 1, finalRange, false);
  return finalRange;
}

const alteredBinarySearch = function (array, target, left, right, finalRange, goLeft) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] < target) {
      left = mid + 1;
    } else if (array[mid] > target) {
      right = mid - 1;
    } else {
      if (goLeft) {
        if (mid === 0 || array[mid - 1] !== target) {
          finalRange[0] = mid;
          return;
        } else {
          right = mid - 1;
        }
      } else {
        if (mid === array.lengtth - 1 || array[mid + 1] !== target) {
          finalRange[1] = mid;
          return;
        } else {
          left = mid + 1;
        }
      }
    }
  }
};

console.log(searchForRange([0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73], 45));
