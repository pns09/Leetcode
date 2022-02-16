/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function (source) {
  // O(N^2) | O(N)
  let stack = [];
  let temp = [];
  let isMultiLine = false;

  for (let i = 0; i < source.length; i++) {
    let block = source[i];
    for (let j = 0; j < block.length; j++) {
      // start multiline
      if (block[j] === '/' && block[j + 1] === '*' && !isMultiLine) {
        isMultiLine = true;
        j++;
        // end multiline
      } else if (block[j] === '*' && block[j + 1] === '/' && isMultiLine) {
        isMultiLine = false;
        j++;
        // comments
      } else if (block[j] === '/' && block[j + 1] === '/' && !isMultiLine) {
        break;
        // if codeblock and is not multiline
      } else if (!isMultiLine) {
        temp.push(source[i][j]);
      }
    }

    if (temp.length > 0 && !isMultiLine) {
      stack.push(temp.join(''));
      temp = [];
    }
  }
  return stack;
};

console.log(removeComments(['a/*comment', 'line', 'more_comment*/b']));

// Input: source = ["a/*comment", "line", "more_comment*/b"]
// Output: ["ab"]
