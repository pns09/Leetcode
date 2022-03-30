var levelOrder = function (root) {
  let res = [];
  if (!root) return res;

  let queue = [root];

  while (queue.length) {
    let length = queue.length;
    let levelNodes = [];

    for (let i = 0; i < length; i++) {
      let node = queue.shift();

      if (!node) break;

      levelNodes.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    res.push(levelNodes);
  }
  return res;
};
