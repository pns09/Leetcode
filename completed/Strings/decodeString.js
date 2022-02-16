/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ']') {
      stack.push(s[i]);
    } else {
      let substr = ''; // store the substring by popping from end of the stack.
      while (stack[stack.length - 1] !== '[') {
        substr = stack.pop() + substr;
      }

      stack.pop(); // remove opening bracket from the stack.

      let num = ''; // store the number before the substring and multiply the substr that many times.
      while (stack && parseInt(stack[stack.length - 1]) >= 0) {
        num = stack.pop() + num;
      }

      let tempArr = Array(parseInt(num)).fill(substr);
      stack = stack.concat(...tempArr);
    }
  }
  return stack.join('');
};

console.log(decodeString((s = '3[a2[c]]')));

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"

// Input: s = "3[a2[c]]"
// Output: "accaccacc"
