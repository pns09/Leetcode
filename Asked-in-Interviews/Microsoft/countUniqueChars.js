// Given a string of lower case characters, return the number of substrings that can be formed
// such that every string only has unique characters.
const uniqueChar = (S) => {
  if (S == null || S.trim().length == 0) return 0;

  let res = 0;
  let set = new Set();

  for (let i = 0; i < S.length; i++) {
    if (set.has(S.charAt(i))) {
      res++;
      set.clear();
    }
    set.add(S.charAt(i));
  }
  return res + 1;
};

console.log(uniqueChar('bbbba'));
