var invertTree = function (root) {
  // O(N) | O(N) - Recursive
  if (!root) return null;

  let left = invertTree(root.left);
  let right = invertTree(root.right);

  root.left = right;
  root.right = left;

  return root;
};

console.log(invertTree([4, 2, 7, 1, 3, 6, 9]));

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
