function nodeDepths(root) {
  // Write your code here.
  return calculateSum(root, 0);
}

const calculateSum = (root, currSum) => {
  if (root === null) return 0;
  const depth = currSum;
  return depth + calculateSum(root.left, depth + 1) + calculateSum(root.right, depth + 1);
};

// one-liner
function nodeDepths(root) {
  // Write your code here.
  if (!node) return 0;
  return depth + nodeDepths(root.left, depth + 1) + nodeDepths(node.right, depth + 1);
}
