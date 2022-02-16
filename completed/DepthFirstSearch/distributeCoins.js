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
 * @return {number}
 */
var distributeCoins = function (root) {
  let count = 0;
  const dfs = (root) => {
    if (!root) return 0;

    let left = dfs(root.left);
    let right = dfs(root.right);

    count += Math.abs(left) + Math.abs(right); // calc abs count of left and right tree
    return root.val + left + right - 1; // substract curr node val with left ans right tree vals
  };

  dfs(root);
  return count;
};

console.log(distributeCoins((root = [3, 0, 0])));
// Output: 2
// Explanation: From the root of the tree, we move one coin to its left child, and one coin to its right child.
