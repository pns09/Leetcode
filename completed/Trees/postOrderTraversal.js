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
var postorderTraversal = function (root) {
  let res = [];

  const postOrder = (root) => {
    if (!root) return;
    postOrder(root.left);
    postOrder(root.right);
    res.push(root.val);
  };

  postOrder(root);
  return res;
};

// Iterative Approach
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
var postorderTraversal = function (root) {
  let res = [];
  if (!root) return res;

  let stack = [root];

  while (stack.length) {
    let node = stack.pop();

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);

    res.unshift(node.val);
  }

  return res;
};
