var nextGreaterElement = function (n) {
  n = n.toString().split('');
  let temp = [];

  for (let i = n.length - 1, j = 0; i >= 0; i--) {
    if (i === 0) return -1;
    temp.push(n[i]);
    if (n[i - 1] < n[i]) {
      while (n[i - 1] >= temp[j]) j++; //find the smallest number which bigger than n[i-1] and swap.
      [n[i - 1], temp[j]] = [temp[j], n[i - 1]];
      n = n.slice(0, i);
      break;
    }
  }
  let res = parseInt(n.join('') + temp.join(''));
  return res > 2147483647 ? -1 : res;
};

console.log(nextGreaterElement(158476531));
// output: 158513467

// Input: n = 12
// Output: 21
