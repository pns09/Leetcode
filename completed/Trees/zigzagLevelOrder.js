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
var zigzagLevelOrder = function (root) {
  let res = [];
  if (!root) return res;

  let currNodes = [root];
  let counter = 0;

  while (currNodes.length) {
    let levelNodes = [];
    let len = currNodes.length;
    counter++;

    for (let i = 0; i < len; i++) {
      let node = currNodes.shift();
      if (!node) break;
      levelNodes.push(node.val);
      if (node.left) currNodes.push(node.left);
      if (node.right) currNodes.push(node.right);
    }

    // only when the count is even reverse the array so that it will print in zigzag order
    if (counter % 2 === 0) levelNodes.reverse();
    res.push(levelNodes);
  }

  return res;
};

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]
