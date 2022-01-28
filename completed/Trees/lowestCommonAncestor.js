/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 1
var lowestCommonAncestor = function (root, p, q) {
  // if root is null or if the root matched with either p or q then the current node is ancestor
  if (root === null || root === p || root === q) {
    return root;
  }

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  // if left returned a value and right returned a value return the root as ancestor
  if (left && right) {
    return root;
  }

  // if left returned null or right returned null, then send back the value which ever side the value was found
  return left === null ? right : left;
};

// 2
var lowestCommonAncestor = function (root, p, q) {
  //O(N) | O(1) | Iterative

  let pVal = p.val;
  let qVal = q.val;

  while (root !== null) {
    let parentVal = root.val;
    if (pVal > parentVal && qVal > parentVal) {
      root = root.right;
    } else if (pVal < parentVal && qVal < parentVal) {
      root = root.left;
    } else {
      return root;
    }
  }
};
