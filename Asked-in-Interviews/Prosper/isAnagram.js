var isAnagram = function (s, t) {
  // O(n) | O(n)
  if (s.length !== t.length) return false;

  let map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]]) return false;
    else {
      count = map[t[i]];
      count--;
      map[t[i]] = count;
    }
  }

  return true;
};

console.log(isAnagram('Mary', 'Army'));
