/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) return '';
  return '' + root.val + ',' + serialize(root.left) + ',' + serialize(root.right);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let arr = data.split(',');

  const helper = (arr) => {
    let val = arr.shift();
    if (!val) return null;
    let node = new TreeNode(val);
    node.left = helper(arr);
    node.right = helper(arr);
    return node;
  };

  return helper(arr);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
