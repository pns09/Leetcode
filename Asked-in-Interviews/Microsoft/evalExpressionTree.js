class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const evalTree = (node) => {
  if (!node) return 0;

  if (!node.left && !node.right) {
    return parseInt(node.val);
  }

  let leftTree = evalTree(node.left);
  let rightTree = evalTree(node.right);

  if (node.val === '+') {
    return leftTree + rightTree;
  }
  if (node.val === '-') {
    return leftTree - rightTree;
  }
  if (node.val === '*') {
    return leftTree * rightTree;
  }
  if (node.val === '/') {
    return leftTree / rightTree;
  }
};

const root = new Node('+');
root.left = new Node('*');
root.left.left = new Node('5');
root.left.right = new Node('-4');
root.right = new Node('-');
root.right.left = new Node('100');
root.right.right = new Node('20');

console.log(evalTree(root));
