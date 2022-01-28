/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function (source) {
  let res = [];
  let tempCodeBlock = [];
  let isMultiLine = false;

  for (let i = 0; i < source.length; i++) {
    let codeLen = source[i].length;
    for (let j = 0; j < codeLen; j++) {
      if (j < codeLen - 1 && source[i][j] === '/' && source[i][j + 1] === '*' && !isMultiLine) {
        isMultiLine = true;
        j++;
      } else if (j < codeLen - 1 && source[i][j] === '*' && source[i][j + 1] === '/' && isMultiLine) {
        isMultiLine = false;
        j++;
      } else if (j < codeLen - 1 && source[i][j] === '/' && source[i][j + 1] === '/' && !isMultiLine) {
        break;
      } else if (!isMultiLine) {
        tempCodeBlock.push(source[i][j]);
      }
    }
    if (tempCodeBlock.length > 0 && !isMultiLine) {
      res.push(tempCodeBlock.join(''));
      tempCodeBlock = [];
    }
  }
  return res;
};

console.log(removeComments(['a/*comment', 'line', 'more_comment*/b']));

// Input: source = ["a/*comment", "line", "more_comment*/b"]
// Output: ["ab"]
