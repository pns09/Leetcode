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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
//  Construct Binary Tree from Preorder and Inorder Traversal
var buildTree = function (preorder, inorder) {
  const getTree = (left = 0, right = preorder.length - 1) => {
    if (left > right) return null;

    const node = preorder.shift();
    const treeNode = new TreeNode(node);
    const index = inorder.indexOf(node);

    treeNode.left = getTree(left, index - 1);
    treeNode.right = getTree(index + 1, right);
    return treeNode;
  };

  return getTree();
};

console.log(buildTree([3,9,20,15,7], inorder = [9,3,15,20,7]));
