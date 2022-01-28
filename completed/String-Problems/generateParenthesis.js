/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // only add open paren if open < n
  // only add closing paren if closed < open
  // base case: if(s.leng === 2 * n)

  let result = [];
  const backTrack = (s = '', openCount = 0, closedCount = 0) => {
    if (s.length === 2 * n) {
      result.push(s);
      return;
    }
    if (openCount < n) {
      backTrack(s + '(', openCount + 1, closedCount);
    }
    if (closedCount < openCount) {
      backTrack(s + ')', openCount, closedCount + 1);
    }
  };
  backTrack();
  return result;
};

console.log(generateParenthesis(3));
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
