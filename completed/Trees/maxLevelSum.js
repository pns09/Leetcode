var maxLevelSum = function (root) {
  // O(N) | O(N)
  // Array to keep track of sums per level
  let sums = [];

  // inorder or level Order traversal
  const preOrder = (node, level) => {
    if (!node) return;

    // this is inorder
    // preOrder(node.left, level + 1);
    // sums[level] = sums[level] ? sums[level] + node.val : node.val;
    // inorder(node.right, level + 1);

    // this is level order | preOrder traversal
    sums[level] = sums[level] ? sums[level] + node.val : node.val;
    preOrder(node.left, level + 1);
    preOrder(node.right, level + 1);
  };

  preOrder(root, 0);

  // Return the index of the max value in the array
  // Note: level is 1-index based
  return sums.indexOf(Math.max(...sums)) + 1;
};

console.log(maxLevelSum([1, 7, 0, 7, -8, null, null]));

// Input: root = [1,7,0,7,-8,null,null]
// Output: 2
// Explanation:
// Level 1 sum = 1.
// Level 2 sum = 7 + 0 = 7.
// Level 3 sum = 7 + -8 = -1.
// So we return the level with the maximum sum which is level 2.
