class BST {
  constructor(value) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
// This algo only work properly when the given array is
// 1. Sorted in ascending order and
// 2. All the values in the array are distinct - eg : [1,2,3,4,5] and not [1,2,2,3,4]
function minHeightBst(array) {
  return constructBstUtil(array, 0, array.length - 1);
}

const constructBstUtil = (array, left, right) => {
  if (right < left) return null;
  let middle = Math.floor((left + right) / 2);
  let bst = new BST(array[middle]);
  bst.left = constructBstUtil(array, left, middle - 1);
  bst.right = constructBstUtil(array, middle + 1, right);
  return bst;
};

console.log(minHeightBst([1, 2, 35, 7, 10, 13, 14, 15, 22]));
