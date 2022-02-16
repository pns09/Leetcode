function matchingStrings(strings, queries) {
  // Write your code here
  //   O(n) | O(n)
  let map = {};
  let result = [];
  for (let i = 0; i < strings.length; i++) {
    map[strings[i]] = (map[strings[i]] || 0) + 1;
  }
  for (let i = 0; i < queries.length; i++) {
    if (map[queries[i]]) {
      result.push(map[queries[i]]);
    } else result.push(0);
  }
  return result;
}

console.log(matchingStrings(['ab', 'ab', 'aba'], ['ab', 'abc', 'aba']));

// result: [2,0,1];

// Brute force
function matchingStrings(strings, queries) {
  // Write your code here
  // O(n^2) | O(n);
  let results = [];
  for (let i = 0; i < queries.length; i++) {
    let count = 0;
    for (let j = 0; j < strings.length; j++) {
      if (strings[j] === queries[i]) {
        count++;
      }
    }
    results.push(count);
  }
  return results;
}
