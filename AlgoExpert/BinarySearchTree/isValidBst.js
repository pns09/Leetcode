var isValidBST = (root) => {
  // if (root === null) return true;
  return validBstHelper(root, -Infinity, Infinity);
};

const validBstHelper = (root, minVal, maxVal) => {
  if (root === null) return true;

  if (root.val <= minVal || root.val >= maxVal) return false;
  let left = validBstHelper(root.left, minVal, root.val);
  let right = validBstHelper(root.right, root.val, maxVal);

  return left && right;
};

console.log(valibBst([5, 1, 4, null, null, 3, 6]));
// Input: root = [2,1,3]
// Output: true

// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.
