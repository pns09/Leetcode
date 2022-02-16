const binarySearch = (arr, target) => {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex <= endIndex) {
    let middle = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (target == arr[middle]) {
      return middle;
    }
    if (target < arr[middle]) {
      endIndex = middle - 1;
    } else {
      startIndex = middle + 1;
    }
  }
  return -1;
};

console.log(binarySearch([1, 3, 5, 6], 0));
