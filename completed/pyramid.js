function pyramid(n) {
  let pyramidArr = [];
  let hashStr = '#';

  if (n <= 2) {
    pyramidArr.push('#');
  } else if (n <= 1) {
    console.log('#');
  }

  for (let i = 2; i <= n; i++) {
    hashStr = '#' + hashStr + '#';
    pyramidArr.push(hashStr);
  }

  let pyramidBase = pyramidArr[pyramidArr.length - 1];
  for (let i = 0; i < pyramidArr.length; i++) {
    while (pyramidArr[i].length < pyramidBase.length) {
      pyramidArr[i] = ' ' + pyramidArr[i] + ' ';
    }
    console.log(pyramidArr[i]);
  }
}

console.log(pyramid(4));
