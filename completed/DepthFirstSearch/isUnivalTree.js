function countUnival(root) {
    if (root === null) return 0;
  
    let count = 0;
    // only of one node tree - eg - [1]
    if (root.left === null && root.right === null) {
      count++;
      return count;
    }
  
    const dfs = (node) => {
      let isUnival = true;
      // check all the left nodes and if node is null increment count and return true;
      if (node.left) {
        let left = dfs(node.left);
        isUnival = left && isUnival && node.val === node.left.val;
      }
      // check all the right nodes and if node is null increment count and return true;
      if (node.right) {
        let right = dfs(node.right);
        isUnival = right && isUnival && node.val === node.right.val;
      }
  
      if (isUnival) {
        count++;
        return true;
      }
    };
  
    dfs(root);
    return count;
  }
  


function isUnivalSubtrees(tree) {
  if (!tree) return;
  if (tree.left !== null && tree.val !== tree.left.val) {
    return false;
  }

  if (tree.right !== null && tree.val !== tree.right.val) {
    return false;
  }
  if (isUnivalSubtrees(tree.left) && isUnivalSubtrees(tree.right)) {
    return true;
  } else false;
}

const countUnival = (root) => {
  if (root == null) return 0;

  totalCount = countUnival(root.left) + countUnival(root.right);
  if (isUnivalSubtrees(root)) {
    totalCount += 1;
  }
  return totalCount;
};
