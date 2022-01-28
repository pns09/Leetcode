// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  // Write your code here.
  // O(N) | O(N)
  let array = [];
  // In-order traversal
  inOrderTraverse(tree, array);
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) return null;
    if (array[i] === node) {
      return array[i + 1];
    }
  }
  return -1;
}

const inOrderTraverse = (tree, array) => {
  if (!tree) return array;
  inOrderTraverse(tree.left, array);
  array.push(tree);
  inOrderTraverse(tree.right, array);
  return array;
};

console.log(
  findSuccessor(
    {
      nodes: [
        { id: '1', left: '2', parent: null, right: '3', value: 1 },
        { id: '2', left: '4', parent: '1', right: '5', value: 2 },
        { id: '3', left: null, parent: '1', right: null, value: 3 },
        { id: '4', left: '6', parent: '2', right: null, value: 4 },
        { id: '5', left: null, parent: '2', right: null, value: 5 },
        { id: '6', left: null, parent: '4', right: null, value: 6 },
      ],
      root: '1',
    },
    (node = 5)
  )
);

// output: 1
// This tree's in-order traversal order is
// 6 -&gt; 4 -&gt; 2 -&gt; 5 -&gt; 1 -&gt; 3
// 1 comes immediately after 5
