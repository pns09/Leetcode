// 1 two pointer approach
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  // O(N) | O(1)
  let sIndex = s.length - 1;
  let tIndex = t.length - 1;
  let sCount = 0;
  let tCount = 0;

  while (sIndex >= 0 || tIndex >= 0) {
    if (s[sIndex] === '#') {
      sCount++;
      sIndex--;
      continue;
    }

    if (t[tIndex] === '#') {
      tCount++;
      tIndex--;
      continue;
    }

    if (sCount) {
      sIndex--;
      sCount--;
      continue;
    }

    if (tCount) {
      tIndex--;
      tCount--;
      continue;
    }

    if (s[sIndex] !== t[tIndex]) return false;
    sIndex--;
    tIndex--;
  }
  return true;
};
console.log((s = 'ab#c'), (t = 'ad#c'));
// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

// 2 - using arrays
var backspaceCompare = function (s, t) {
  // O(m+n) | O(m+n)
  let sArr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '#') sArr.pop();
    else sArr.push(s[i]);
  }

  let tArr = [];
  for (let i = 0; i < t.length; i++) {
    if (t[i] === '#') tArr.pop();
    else tArr.push(t[i]);
  }

  return sArr.join('') === tArr.join('');
};

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
