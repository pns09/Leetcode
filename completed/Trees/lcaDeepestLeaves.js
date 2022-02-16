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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function (root) {
  let maxDepth = 0;
  let lca = null;

  const dfs = (node, depth) => {
    if (node === null) return depth - 1;

    maxDepth = Math.max(depth, maxDepth);

    let left = dfs(node.left, depth + 1);
    let right = dfs(node.right, depth + 1);

    if (left === maxDepth && right === maxDepth) {
      lca = node;
    }

    return Math.max(left, right);
  };

  dfs(root, 0);
  return lca;
};

// Input: root = [3,5,1,6,2,0,8,null,null,7,4]
// Output: [2,7,4]
// Explanation: We return the node with value 2, colored in yellow in the diagram.
// The nodes coloured in blue are the deepest leaf-nodes of the tree.
// Note that nodes 6, 0, and 8 are also leaf nodes, but the depth of them is 2, but the depth of nodes 7 and 4 is 3.