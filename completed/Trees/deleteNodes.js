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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
  let res = [];
  let toDelete = new Set(to_delete); // we created set to easily find the to_delete node. Otherwise we has to check it in the to_delete array by iterating and checking every node element.

  // recursive call and delete from bottom up.
  removeNodes(root, toDelete, res);

  // after deleting add the remaining root.
  if (!toDelete.has(root.val)) {
    res.push(root);
  }

  return res;
};

const removeNodes = (root, toDelete, res) => {
  if (!root) return null; // base case

  // bottom - up traversal
  root.left = removeNodes(root.left, toDelete, res);
  root.right = removeNodes(root.right, toDelete, res);

  if (toDelete.has(root.val)) {
    if (root.left) res.push(root.left); // before deleting store the left and right subtrees
    if (root.right) res.push(root.right);
    return null; // return null because we have to delete the node that we are on after storing left and right subtrees.
  }

  return root;
};

// Input: (root = [1, 2, 3, 4, 5, 6, 7]), (to_delete = [3, 5]);
// Output: [[1, 2, null, 4], [6], [7]];
