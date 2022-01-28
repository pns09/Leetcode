var boundaryOfBinaryTree = function (root) {
  let res = [];
  if (!root) {
    return res;
  }
  //adding root if not leaf
  if (!isLeaf(root)) {
    res.push(root.val);
  }

  //left boundary
  let t = root.left;
  while (t !== null) {
    if (!isLeaf(t)) {
      res.push(t.val);
    }
    if (t.left) {
      t = t.left;
    } else {
      t = t.right;
    }
  }

  //add leaves
  addLeaves(res, root);

  //right Boundary
  let stack = [];
  t = root.right;
  while (t !== null) {
    if (!isLeaf(t)) {
      stack.push(t.val);
    }
    if (t.right) {
      t = t.right;
    } else {
      t = t.left;
    }
  }

  while (stack.length > 0) {
    res.push(stack.pop());
  }
  return res;
};

function isLeaf(tree) {
  return tree.left === null && tree.right === null;
}

function addLeaves(res, tree) {
  if (isLeaf(tree)) {
    res.push(tree.val);
  } else {
    if (tree.left) {
      addLeaves(res, tree.left);
    }
    if (tree.right) {
      addLeaves(res, tree.right);
    }
  }
}

// Input: root = [1,null,2,3,4]
// Output: [1,3,4,2]
// Explanation:
// - The left boundary is empty because the root does not have a left child.
// - The right boundary follows the path starting from the root's right child 2 -> 4.
//   4 is a leaf, so the right boundary is [2].
// - The leaves from left to right are [3,4].
// Concatenating everything results in [1] + [] + [3,4] + [2] = [1,3,4,2].
