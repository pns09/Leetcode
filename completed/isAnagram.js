function anagrams(stringA, stringB) {
  const str1 = stringA.replace(/ /g, '').toLowerCase();
  const str2 = stringB.replace(/ /g, '').toLowerCase();

  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < str1.length; i++) {
    obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
  }
  for (let j = 0; j < str2.length; j++) {
    obj2[str2[j]] = (obj2[str2[j]] || 0) + 1;
  }
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length === obj2Keys.length) {
    for (let k = 0; k < obj1Keys.length; k++) {
      if (obj1[obj1Keys[k]] !== obj2[obj1Keys[k]]) {
        return false;
      }
    }
  } else {
    return false;
  }

  return true;
}

// console.log(anagrams('rail safety', 'fairy tales'))
console.log(anagrams('llhoe', 'hello'));

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  for (let i = 0; i < t.length; i++) {
    if (!t.includes(s[i])) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram('aaca', 'acca'));

// one liner Js solution
// var isAnagram = function(s, t) {
//     return s.split('').sort().join() == t.split('').sort().join();
// };
