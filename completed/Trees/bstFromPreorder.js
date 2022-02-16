/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
// 1 = Recursion



// 2 - For each element in preorder array, check if ele can be placed from to root of the tree
var bstFromPreorder = function (preorder) {
  // O(N^2) | O(N)
  let root = new TreeNode(preorder[0]);
  for (let i = 1; i < preorder.length; i++) {
    buildBst(root, preorder[i]);
  }
  return root;
};

const buildBst = (root, ele) => {
  if (!root) return (root = new TreeNode(ele));

  if (root.val > ele) {
    root.left = buildBst(root.left, ele);
  } else {
    root.right = buildBst(root.right, ele);
  }

  return root;
};

// Input: preorder = [8,5,1,7,10,12]
// Output: [8,5,10,1,7,null,12]