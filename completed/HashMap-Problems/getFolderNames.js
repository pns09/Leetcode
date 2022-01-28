/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (names) {
  let map = {};

  for (let i = 0; i < names.length; i++) {
    if (!map[names[i]]) {
      map[names[i]] = names[i];
    } else {
      let k = 1;
      let newName = names[i] + '(' + k + ')';

      while (true) {
        if (!map[newName]) {
          map[newName] = newName;
          break;
        } else {
          k++;
          newName = names[i] + '(' + k + ')';
        }
      }
    }
  }

  return Object.values(map);
};

console.log(getFolderNames(['pes', 'fifa', 'gta', 'pes(2019)']));

// Input: names = ["pes","fifa","gta","pes(2019)"]
// Output: ["pes","fifa","gta","pes(2019)"]

// Input: ["kaido","kaido(1)","kaido","kaido(1)"]
// Output: ["kaido","kaido(1)","kaido(2)","kaido(1)(1)"]
