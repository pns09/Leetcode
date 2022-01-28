function subarraySort(array) {
  // Write your code here.
  // O(N^2) |  O(N)
  const range = [];
  for (let i = array.length - 2; i >= 0; i--) {
    if (array[i] > array[i + 1]) {
      let j = i;
      // swap until perv num is less that curr num
      while (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        j++;
      }

      range.push(i, j);
    }
  }
  if (range.length === 0) return [-1, -1]; // when the array is already in sorted order

  const min = Math.min(...range);
  const max = Math.max(...range);

  return [min >= 0 ? min : -1, max >= 0 ? max : -1];
}

console.log(subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]));
// output: [3,9] -> return in the start and end indexes of the subarray which need to be sorted.
