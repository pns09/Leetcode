/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
  let parent = null;
  let curr = root;

  while (curr !== p) {
    if (p.val < curr.val) {
      parent = curr;
      curr = curr.left;
    } else curr = curr.right;
  }

  if (!curr.right) return parent;
  curr = curr.right;
  while (curr.left) curr = curr.left;
  return curr;
};

var inorderSuccessor = function(root, p) {
   let parent = null;
   let curr = root;

  while(curr !== p) {
    if(p.val < curr.val) {
      parent = curr;
      curr = curr.left;
    } else curr = curr.right;
  }

 if(!curr.right) return parent;
  curr = curr.right;
  while(curr.left) curr = curr.left;
  return curr;
};

var inorderSuccessor = function(root, p) {
 let stack = [];

  const inorder = (node) => {
   if(node) {
    if(node.left) inorder(node.left);
    stack.push(node);
    if(node.right) inorder(node.right);
   }
  }
  inorder(root);

  let index =  stack.indexOf(p);
  return stack[index+1];
}
