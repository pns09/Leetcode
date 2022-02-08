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
 * @return {number[]}
 */
// Recursive Approach
var inorderTraversal = function (root) {
  let res = [];

  const inorder = (root) => {
    if (!root) return;
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  };

  inorder(root);
  return res;
};

// Iteractive Approach
var inorderTraversal = function (root) {
  let res = [];
  let stack = [];
  let curr = root;

  while (curr !== null || stack.length) {
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    res.push(curr.val);
    curr = curr.right;
  }
  return res;
};
