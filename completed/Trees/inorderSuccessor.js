/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var inorderSuccessor = function (node) {
  // O(H) - H is height of the tree | O(1)
  // Node has a right child, and hence its successor is somewhere lower in the tree.
  // To find the successor, go to the right once and then as many times to the left as you could.
  if (node.right) {
    node = node.right;
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  // Node has no right child, then its successor is somewhere upper in the tree.
  // To find the successor, go up till the node that is left child of its parent.
  // The answer is the parent. Beware that there could be no successor (= null successor) in such a situation.
  while (node.parent && node === node.parent.right) {
    node = node.parent;
  }
  return node.parent;
};

console.log(inorderSuccessor((node = 6)));
// Input: tree = [2,1,3], node = 1
// Output: 2
// Explanation: 1's in-order successor node is 2. Note that both the node and the return value is of Node type.

// recursive approach
var inorderSuccessor = function (node) {
  if (node.right) return goDown(node.right);
  return goUp(node.parent, node.val);
};

function goDown(node) {
  if (!node || !node.left) return node;
  return goDown(node.left);
}

function goUp(node, val) {
  if (!node) return node;
  if (node.val > val) return node;
  return goUp(node.parent, val);
}

// iterative
var inorderSuccessor = function (root, p) {
  let stack = [];
  
  const inorder = (node) => {
    if (node) {
      if (node.left) inorder(node.left);
      stack.push(node);
      if (node.right) inorder(node.right);
    }
  };
  inorder(root);

  let index = stack.indexOf(p);
  return stack[index + 1];
};
