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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let paths = [];
  let path = [];

  const preOrder = (node, path) => {
    if (!node) return;

    path.push(node.val);

    if (!node.left && !node.right) {
      paths.push(path.join('->'));
      return;
    }

    preOrder(node.left, [...path]);
    preOrder(node.right, [...path]);
  };

  preOrder(root, path);

  return paths;
};

// Input: root = [1, 2, 3, null, 5];
// Output: ['1->2->5', '1->3'];
