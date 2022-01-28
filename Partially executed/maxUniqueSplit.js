/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function (s) {
  let set = new Set();
  let currStr = '';
  let res = [];

  for (let i = 0; i <= s.length; i++) {
    if (currStr !== '' && !set.has(currStr)) {
      set.add(currStr);
      res.push(currStr);
    } else if (set.has(currStr)) {
      currStr += s[i] ? s[i] : '';
      continue;
    }
    currStr = s[i];
  }

  let resStr = res.join('');

  if (resStr.length !== s.length) {
    let prevStr = res.pop();
    set.delete(prevStr);
    let temp = prevStr + currStr;
    set.add(temp);
    res.push(temp);
  }

  let len = res.length;
  return res.join('') == s ? len : len;
};

console.log(maxUniqueSplit('wwwzfvedwfvhsww'));
// output : 11
// my output : 10
// wwwzfvedwfvhsww
