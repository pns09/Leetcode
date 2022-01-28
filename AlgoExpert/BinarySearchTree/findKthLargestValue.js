// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
  // Write your code here.
  // O(n) | O(n)
  this.array = [];
  storeAllValues(tree, k);
  return array.length[array.length - k];
}

const storeAllValues = (tree, k) => {
  // inorder tree traversal
  if (tree !== null) {
    findKthLargestValueInBst(tree.left, k);
    this.array.push(tree.value);
    findKthLargestValueInBst(tree.right, k);
  }
};
