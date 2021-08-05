function filterNumbersFromArray(arr) {
  // Write the code that goes here
  let i = 0;
  while (i < arr.length) {
    if (typeof arr[i] !== 'number') {
      arr.splice(i, 1);
      i--;
    }
    i++;
  }
  return arr;
}

var arr = [1, 'a', 'b', 2];
console.log(filterNumbersFromArray(arr));
