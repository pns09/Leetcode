const search = (s) => {
  let map = {};
  let start = 0;
  let maxLen = 0;
  let arr = s.toString();

  for (i = 0; i < arr.length; i++) {
    let current = map[arr[i]];
    if (current != null && start <= current) {
      start = current + 1;
    } else {
      maxLen = Math.max(maxLen, i - start + 1);
    }

    map[arr[i]] = i;
  }
  return maxLen;
};

console.log(search(12345565));
