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
 * @param {number} targetSum
 * @return {number}
 */
// Prefix Sum problem
var pathSum = function (root, targetSum) {
  let map = new Map();
  let count = 0;

  const preorder = (node, currSum) => {
    if (!node) return;

    // current prefix sum
    currSum += node.val;

    //if the currSum == targetSum then that what we're looking for
    // increment the count;
    if (currSum === targetSum) {
      count++;
    }

    // has currSum - targetSum previously occured? if yes, add to count.
    count += map.get(currSum - targetSum) || 0;

    // add the current sum into hashmap
    // to use it during the child nodes processing
    map.set(currSum, (map.get(currSum) || 0) + 1);

    // process left and right subtrees
    preorder(node.left, currSum);
    preorder(node.right, currSum);

    // remove the current sum from the hashmap
    // in order not to use it during the parallel subtree processing
    map.set(currSum, map.get(currSum) - 1);
  };

  preorder(root, 0);
  return count;
};

// Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
// Output: 3