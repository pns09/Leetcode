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
var goodNodes = function (root) {
  let count = 0;

  const preOrder = (node, max) => {
    if (!node) return 0;

    max = Math.max(node.val, max);

    preOrder(node.left, max);
    preOrder(node.right, max);

    if (node.val >= max) {
      count++;
    }
  };

  preOrder(root, root.val);
  return count;
};

console.log(goodNodes([3, 1, 4, 3, null, 1, 5]));

// Input: root = [3,1,4,3,null,1,5]
// Output: 4
// Explanation: Nodes in blue are good.
// Root Node (3) is always a good node.
// Node 4 -> (3,4) is the maximum value in the path starting from the root.
// Node 5 -> (3,4,5) is the maximum value in the path
// Node 3 -> (3,1,3) is the maximum value in the path.
