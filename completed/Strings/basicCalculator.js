/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let currNum = 0;
  let operators = ['+', '-', '*', '/'];
  let operation = '+';
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let str = s[i];
    if (str >= '0' && str <= '9') {
      currNum = currNum * 10 + +str; // converting to num;
      //  we need to do currNum * 10 because to get 40 we have to do 4 * 10 as we are considering 1 dig at a time.
    }

    if (operators.includes(str) || i === s.length - 1) {
      if (operation === '+') {
        stack.push(currNum);
      } else if (operation === '-') {
        stack.push(-currNum);
      } else if (operation === '*') {
        stack.push(stack.pop() * currNum);
      } else if (operation === '/') {
        if (stack[stack.length - 1] < 0) {
          // Math.floor of -1.5 is -2 (We want Math.ceil = -1 if negative)
          stack.push(Math.ceil(stack.pop() / currNum));
        } else {
          stack.push(Math.floor(stack.pop() / currNum));
        }
      }
      currNum = 0;
      operation = str;
    }
  }
  let res = 0;
  while (stack.length) {
    res += stack.pop();
  }

  return res;
};

console.log(calculate('3+2*2'));
// output: 7
