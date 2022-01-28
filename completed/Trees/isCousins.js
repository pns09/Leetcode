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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  // O(N) | O(N)
  let queue = [root];

  while (queue.length) {
    let currLen = queue.length;
    let isXCousin = false;
    let isYCousin = false;

    for (let i = 0; i < currLen; i++) {
      let node = queue.shift();

      if (node) {
        if (node && node.left !== null && node.right !== null) {
          if (node.left.val === x && node.right.val === y) return false;
          if (node.left.val === y && node.right.val === x) return false;
        }

        if (node.val === x) isXCousin = true;
        if (node.val === y) isYCousin = true;

        queue.push(node.left);
        queue.push(node.right);

        if (isXCousin && isYCousin) return true;
      }
    }
  }
  return false;
};

// Input: root = [1,2,3,4], x = 4, y = 3
// Output: false

// Given the root of a binary tree with unique values and the values of two different nodes of the tree x and y,
// return true if the nodes corresponding to the values x and y in the tree are cousins, or false otherwise.

// Two nodes of a binary tree are cousins if they have the same depth with different parents.

// Note that in a binary tree, the root node is at the depth 0, and children of each depth k node are at the depth k + 1.
