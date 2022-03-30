/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var findLeaves = function (root) {
  let res = [];
  while (root !== null) {
    let stack = [];
    root = addLeaves(root, stack);
    res.push(stack);
  }
  return res;
};

const isLeaf = (root) => {
  return root.left === null && root.right === null;
};

const addLeaves = (root, stack) => {
  if (root === null) return null;

  if (isLeaf(root)) {
    stack.push(root.val);
    return null;
  } else {
    if (root.left) root.left = addLeaves(root.left, stack);
    if (root.right) root.right = addLeaves(root.right, stack);
    return root;
  }
};

// Input: root = [1,2,3,4,5]
// Output: [[4,5,3],[2],[1]]
// Explanation:
// [[3,5,4],[2],[1]] and [[3,4,5],[2],[1]] are also considered correct answers since per each level it does not matter the order on which elements are returned.
