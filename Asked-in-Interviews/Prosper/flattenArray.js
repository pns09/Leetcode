// implemented solution
const flatten = (arr, res) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i], res);
    } else {
      res.push(arr[i]);
    }
  }
  return res;
};

console.log(flatten([0, 1, [2, [[3, 4]]]], []));

// 2
const flatten = (arr) => {
  let res = [];
  const flatHelper = (arr, res) => {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flatHelper(arr[i], res);
      } else {
        res.push(arr[i]);
      }
    }
  };
  flatHelper(arr, res);
  return res;
};

console.log(flatten([0, 1, [2, [[3, 4]]]]));
