/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let open = 0;
  let close = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      close++;
    } else {
      if (close > 0) {
        close--;
      } else {
        open++;
      }
    }
  }
  return open + close;
};

console.log(minAddToMakeValid('((('));
// Output: 3
