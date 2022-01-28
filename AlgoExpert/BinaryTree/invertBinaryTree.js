function invertBinaryTree(tree) {
  // Write your code here.
  // O(N) | O(N) - Iterative approach
  let queue = [tree];

  while (queue.length) {
    let currNode = queue.shift();
    if (currNode !== null) {
      swapNodes(currNode);
      queue.push(currNode.left);
      queue.push(currNode.right);
    }
  }
  return tree;
}

const swapNodes = (currTree) => {
  [currTree.left, currTree.right] = [currTree.right, currTree.left];
};

// 2
function invertBinaryTree(tree) {
  // Write your code here.
  // O(N) | O(N) -  Recursive approach
  if (tree === null) return;
  swapNodes(tree);
  invertBinaryTree(root.left);
  invertBinaryTree(root.right);
}
