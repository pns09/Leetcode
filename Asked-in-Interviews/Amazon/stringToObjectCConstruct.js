var construct = (path) => {
  let finalObj = {};
  let obj = finalObj;

  path = path.split('.');

  for (let i = 0; i < path.length; i++) {
    if (!obj[path[i]]) {
      obj[path[i]] = {};
    }
    obj = obj[path[i]];
  }

  return finalObj;
};

console.log(construct('street.address'));
