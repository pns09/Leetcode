// Each BST node has an
// integer value,
// a left child node and
// a right child node.

// A node is said to be a valid BST node if and only if it satisfies the
// BST property: its value is strictly greater than the values of every
// node to its left; its value is less than or equal to the values
// of every node to its right; and its children nodes are either valid
// BST nodes themselves or None / null.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findClosestValueInBST(tree, target) {
  let currentValue = tree.value;

  while (tree !== null) {
    if (Math.abs(target - currentValue) > Math.abs(target - tree.value)) {
      currentValue = tree.value;
    }

    if (target > tree.value) {
      tree = tree.right;
    } else {
      tree = tree.left;
    }
  }

  return currentValue;
}
