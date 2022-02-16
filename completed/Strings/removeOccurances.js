/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
  // stack problem
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);

    // check if stack is equal to part length
    while (stack.length >= part.length && containsTarget(stack, part)) {
      for (let j = 0; j < part.length; j++) {
        stack.pop();
      }
    }
  }
  return stack.join('');
};

const containsTarget = (stack, part) => {
  let index = stack.length - 1;
  let substr = '';

  while (substr.length !== part.length) {
    substr = stack[index] + substr;
    index--;
  }

  return substr === part;
};

console.log(removeOccurrences((s = 'daabcbaabcbc'), (part = 'abc')));

// Input: s = "daabcbaabcbc", part = "abc"
// Output: "dab"
// Explanation: The following operations are done:
// - s = "daabcbaabcbc", remove "abc" starting at index 2, so s = "dabaabcbc".
// - s = "dabaabcbc", remove "abc" starting at index 4, so s = "dababc".
// - s = "dababc", remove "abc" starting at index 3, so s = "dab".
// Now s has no occurrences of "abc".
