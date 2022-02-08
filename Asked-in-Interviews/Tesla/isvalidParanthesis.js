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
