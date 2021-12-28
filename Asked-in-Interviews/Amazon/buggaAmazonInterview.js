function getValues(obj, path) {
  //console.log(path)
  let isArray = path[0] === '[';
  let newObj = null;
  if (isArray) {
    let index = path.substr(1, path.indexOf(']') - 1);
    path = path.substr(path.indexOf(']') + 1);
    newObj = obj[index];
  } else {
    let paths = path.split('.');
    let selectedPath;
    for (let index = 0; index < paths.length; index++) {
      if (paths[index].length > 0) {
        selectedPath = paths[index];
        break;
      }
    }
    // console.log('----' + selectedPath)
    if (selectedPath.indexOf('[') >= 0) {
      if (path[0] === '.') {
        selectedPath = path.substr(1, path.indexOf('[') - 1);
      } else {
        selectedPath = path.substr(0, path.indexOf('['));
      }
      path = path.substr(path.indexOf('['));
    } else {
      path = path.substr(selectedPath.length + 1);
    }

    newObj = obj[selectedPath];
    //console.log('===' + selectedPath, path)
  }
  if (path.length <= 0) {
    return newObj;
  }
  if (!newObj) {
    return null;
  }

  return getValues(newObj, path);
}

const person = {
  name: 'test',
  address: {
    value: {
      street: [{ name: [{ value: [{ res: 'my name is khan' }] }] }],
    },
  },
};

var res = getValues(person, 'address.value.street[0].name[0].value[0].res');
console.log(res);


// My solution after exploring on this que
const getValue = (obj, path) => {
  path = path.split('.');

  for (let i = 0; i < path.length; i++) {
    let currPath = path[i];
    if (currPath.includes('[')) {
      let key = currPath.substring(0, currPath.indexOf('['));
      let index = currPath.substr(currPath.indexOf('[') + 1, 1);

      obj = obj[key][index];
    } else {
      obj = obj[currPath];
    }
  }
  return obj;
};
