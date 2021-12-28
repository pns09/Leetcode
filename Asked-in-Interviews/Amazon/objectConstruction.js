var construct = (arr) => {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let [child, parent] = arr[i];
    if (!map[parent]) map[parent] = {};

    if (map[child]) {
      map[parent][child] = map[child];
      delete map[child];
    } else {
      map[parent][child] = {};
    }
  }
  return map;
};

console.log(
  construct([
    ['dog', 'mammal'],
    ['shark', 'fish'],
    ['cat', 'mammal'],
    ['mammal', 'animal'],
    ['fish', 'animal'],
  ])
);

// output:
// [
//   {
//     animal: {
//       mammal: {
//         dog: {},
//         cat: {},
//       },
//       fish: {
//         shark: {},
//       },
//     },
//   },
// ];
