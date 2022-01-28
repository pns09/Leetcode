// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
  // O(N) | O(N)
  let sums = [];
  // in-order tree traversal
  inorderTraverse(root, 0, sums);
  return sums;
}

function inorderTraverse(root, currentSum, sums) {
  if (root === null) return;
  let branchSum = currentSum + root.value;
  if (!root.left && !root.right) {
    sums.push(branchSum);
    return;
  }
  inorderTraverse(root.left, branchSum, sums);
  inorderTraverse(root.right, branchSum, sums);
}

console.log(branchSums());
// Input:
//            1
//          /     \
//         2       3
//       /   \    /  \
//      4     5  6    7
//     /   \  /
//    8    9 10

// output: [15, 16, 18, 10, 11]
// 15 == 1 + 2 + 4 + 8
// 16 == 1 + 2 + 4 + 9
// 18 == 1 + 2 + 5 + 10
// 10 == 1 + 3 + 6
// 11 == 1 + 3 + 7

// {
//     nodes: [
//       { id: '1', left: '2', right: '3', value: 1 },
//       { id: '2', left: '4', right: '5', value: 2 },
//       { id: '3', left: '6', right: '7', value: 3 },
//       { id: '4', left: '8', right: '9', value: 4 },
//       { id: '5', left: '10', right: null, value: 5 },
//       { id: '6', left: null, right: null, value: 6 },
//       { id: '7', left: null, right: null, value: 7 },
//       { id: '8', left: null, right: null, value: 8 },
//       { id: '9', left: null, right: null, value: 9 },
//       { id: '10', left: null, right: null, value: 10 },
//     ],
//     root: '1',
//   }
