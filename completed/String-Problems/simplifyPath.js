/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  // O(n) | O(n)
  path = path.split('/');
  let res = [];

  for (let i = 0; i < path.length; i++) {
    if (path[i] === '..') {
      res.pop();
    } else if (path[i] !== '' && path[i] !== '.') res.push(path[i]);
  }

  let str = res.join('/');
  return '/' + str;
};

console.log(simplifyPath('/a/../../b/../c//.//'));

// input : "/a/../../b/../c//.//"
// output : "/c"
