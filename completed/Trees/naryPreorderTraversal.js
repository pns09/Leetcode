/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  let array = [];
  if (!root) return array;

  traverse(root, array);

  return array;
};

const traverse = (root, array) => {
  if (!root) return;

  if (root !== null) {
    let child = root.children;

    array.push(root.val);

    for (let i = 0; i < child.length; i++) {
      traverse(child[i], array);
    }
  }
};

// Input: root = [1, null, 3, 2, 4, null, 5, 6];
// Output: [1, 3, 5, 6, 2, 4];
