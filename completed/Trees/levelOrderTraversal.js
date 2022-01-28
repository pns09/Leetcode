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
var levelOrder = function (root) {
  let res = [];
  if (!root) return res;

  let queue = [root];

  while (queue.length) {
    let length = queue.length;
    let levelNodes = [];

    for (let i = 0; i < length; i++) {
      let node = queue.shift();

      if (!node) break;

      levelNodes.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    res.push(levelNodes);
  }
  return res;
};

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
