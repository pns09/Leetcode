function solution(n) {
  let d = [];
  let l = 0;
  let p;

  while (n > 0) {
    d[l] = n % 2;
    n = Math.floor(n / 2);
    l++;
  }

  for (p = 1; p < 1 + l; p++) {
    let ok = true;
    for (let i = 0; i < l - p; ++i) {
      if (d[i] != d[i + p]) {
        ok = false;
        break;
      }
    }
    if (ok) {
      return p;
    }
  }
  return -1;
}
console.log(solution(3));

// const tableCollection = document.getElementsByTagName('table');
// if (tableCollection.length == 0) {
//   console.log(0);
//   return 0;
// }
// let maxCellCount = 0;

// for (let i = 0; i < tableCollection.length; i++) {
//   const table = tableCollection[i];
//   maxCellCount = Math.max(maxCellCount, table.querySelectorAll('td').length);
// }
// console.log(maxCellCount);
// return maxCellCount;
