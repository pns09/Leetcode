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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root === null) return null;

  if (key > root.val) root.right = deleteNode(root.right, key);
  // delete from the right subtree
  else if (key < root.val) root.left = deleteNode(root.left, key);
  // delete from the left subtree
  else {
    // delete the current node
    if (root.left === null && root.right === null) {
      // the node is a leaf
      root = null;
    } else if (root.right != null) {
      // the node is not a leaf and has a right child
      root.val = successor(root);
      root.right = deleteNode(root.right, root.val);
    } else {
      // the node is not a leaf, has no right child, and has a left child
      root.val = predecessor(root);
      root.left = deleteNode(root.left, root.val);
    }
  }
  return root;
};

const successor = (root) => {
  root = root.right;
  while (root.left !== null) root = root.left;
  return root.val;
};

const predecessor = (root) => {
  root = root.left;
  while (root.right !== null) root = root.right;
  return root.val;
};
