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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  // O(N) | O(N)
  // 1. Construct inorder traversal of the tree. It should be an almost sorted list where only two elements are swapped.
  let nums = [];
  const inorder = (node) => {
    if (!node) return;
    inorder(node.left);
    nums.push(node.val);
    inorder(node.right);
  };
  inorder(root);

  // 2. Identify two swapped elements x and y in an almost sorted array in linear time.
  let x = -Infinity,
    y = -Infinity;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] < nums[i]) {
      y = nums[i + 1]; 
      if (x === -Infinity) x = nums[i];
      else break;
    }
  }

  // 3. Traverse the tree again. Change value x to y and value y to x
  const recover = (node, count) => {
    if (node) {
      if (node.val == x || node.val == y) {
        node.val = node.val === x ? y : x;
        count--;
        if (count === 0) return;
      }

      recover(node.left, count);
      recover(node.right, count);
    }
  };

  recover(root, 2);
};
