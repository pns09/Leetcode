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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (p, q) {
  if (!p) return false;
  // call isSubtree recursively and update the p root node to match with q
  // as isSubtree is called recursively, it indeed call the isSame tree function which compare the node values for a given subtree
  return isSameTree(p, q) || isSubtree(p.left, q) || isSubtree(p.right, q);
};

const isSameTree = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true
