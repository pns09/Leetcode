/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length < 2) return false;
  let allOpenBrackets = ['(', '{', '['];
  let openBracketsArr = [];

  for (let i = 0; i < s.length; i++) {
    if (allOpenBrackets.includes(s[i])) {
      openBracketsArr.push(s[i] == '(' ? ')' : s[i] == '{' ? '}' : s[i] == '[' ? ']' : '');
    } else {
      if (openBracketsArr.pop() !== s[i]) return false;
    }
  }

  return openBracketsArr.length == 0 ? true : false;
};
console.log(isValid('['));

// Variation
var isValidParanthesis = (str) => {
  let closedBrackets = [];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      closedBrackets.push(')');
    } else {
      if (closedBrackets.length && closedBrackets.pop() === ')') {
      } else {
        count++;
      }
    }
  }
  return count + closedBrackets.length;
};

console.log(isValidParanthesis(')('));
// For example, given the string "()())()", you should return 1. 
// Given the string ")(", you should return 2, since we must remove all of them.