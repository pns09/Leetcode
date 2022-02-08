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
// 1 -Iterative
var maxLevelSum = function (root) {
  let queue = [root];
  let max = [];

  while (queue.length) {
    let queLen = queue.length;
    let sum = 0;
    for (let i = 0; i < queLen; i++) {
      let node = queue.shift();

      sum += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    max.push(sum);
  }
  return max.indexOf(Math.max(...max)) + 1;
};

// 2 - Recursive
var maxLevelSum = function (root) {
  // O(N) | O(N)
  // Array to keep track of sums per level
  let sums = [];

  // inorder or level Order traversal
  const preOrder = (node, level) => {
    if (!node) return;

    // this is inorder
    // preOrder(node.left, level + 1);
    // sums[level] = sums[level] ? sums[level] + node.val : node.val;
    // inorder(node.right, level + 1);

    // this is level order | preOrder traversal
    sums[level] = sums[level] ? sums[level] + node.val : node.val;
    preOrder(node.left, level + 1);
    preOrder(node.right, level + 1);
  };

  preOrder(root, 0);

  // Return the index of the max value in the array
  // Note: level is 1-index based
  return sums.indexOf(Math.max(...sums)) + 1;
};

console.log(maxLevelSum([1, 7, 0, 7, -8, null, null]));

// Input: root = [1,7,0,7,-8,null,null]
// Output: 2
// Explanation:
// Level 1 sum = 1.
// Level 2 sum = 7 + 0 = 7.
// Level 3 sum = 7 + -8 = -1.
// So we return the level with the maximum sum which is level 2.
