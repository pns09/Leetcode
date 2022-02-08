// Flatten Binary Tree to Linked List
var flatten = function (root) {
  // O(N) | O(N)
  let head = null;

  const preOrder = (root) => {
    if (!root) return null;

    let left = root.left;
    let right = root.right;

    if (!head) {
      head = root;
    } else if (head !== null) {
      head.left = null;
      head.right = root;
      head = head.right;
    }

    preOrder(left);
    preOrder(right);
  };

  preOrder(root, head);
  return head;
};

// The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
// The "linked list" should be in the same order as a pre-order traversal of the binary tree.
// Input: root = [1,2,5,3,4,null,6]
// Output: [1,null,2,null,3,null,4,null,5,null,6]
