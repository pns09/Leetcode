function solution(a, b) {
  let str = '';
  while (a > 0 || b > 0) {
    if (str.endsWith('aa')) {
      str += 'b';
      b--;
    } else if (str.endsWith('bb')) {
      str += 'a';
      a--;
    } else if (a > b) {
      str += 'a';
      a--;
    } else {
      str += 'b';
      b--;
    }
  }
  return str;
}

console.log(solution(1, 4));
// output : 'bbabb'




// 2 - after my modification
function solution(a, b) {
  let len = a + b;
  let str = '';
  while (a > 0 || b > 0) {
    if (a > b) {
      str += 'a';
      a--;
    } else {
      str += 'b';
      b--;
    }

    if (str.endsWith('aa')) {
      str += 'b';
      b--;
    } else if (str.endsWith('bb')) {
      str += 'a';
      a--;
    }
  }
  return str.substring(0, len);
}
