/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameNode = (p, q) => {
  //O(N) | O(logn) or O(n) - Recursive
  if (!p && !q) return true;
  if (!p || !q) return false;
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// Iterative
const isSameTree = function (p, q) {
  // O(N) | O(N) - Iterative
  let queue = [[p, q]];

  while (queue.length > 0) {
    let [p, q] = queue.shift();
    if (!isSameNode(p, q)) {
      return false;
    }

    if (p || q) {
      queue.push([p.left, q.left]);
      queue.push([p.right, q.right]);
    }
  }
  return true;
};

const isSameNode = (p, q) => {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;
  return true;
};

console.log(isSameTree([1, 2, 3], [1, 2, 3]));

// Input: p = [1,2,3], q = [1,2,3]
// Output: true
