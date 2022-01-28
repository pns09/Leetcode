const printMedian = (stream) => {
  let elements = [];
  console.log(stream[0]);
  for (let i = 1; i < stream.length; i++) {
    elements.push(stream[i]);
    elements.sort();
    let mid = Math.floor(elements.length / 2);
    if (elements.length % 2 === 0) {
      console.log((elements[mid - 1] + elements[mid]) / 2);
    } else {
      console.log(elements[mid]);
    }
  }
};

console.log(printMedian([2, 1, 5, 7, 2, 0, 5]));

// 2 using binary search
const binarySearch = (arr, item, low, high) => {
  if (low >= high) {
    return item > arr[low] ? low + 1 : low;
  }

  let mid = parseInt((low + high) / 2);

  if (item == arr[mid]) return mid + 1;

  if (item > arr[mid]) return binarySearch(arr, item, mid + 1, high);

  return binarySearch(arr, item, low, mid - 1);
};

// Function to print median of stream of integers
const printMedian = (arr) => {
  let count = 1;
  console.log(arr[0]); // first element median is element itself.

  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let num = arr[i];

    // find position to insert current element in sortedpart of array
    let pos = binarySearch(arr, num, 0, j);

    // move elements to right to create space to insert
    // the current element
    while (j >= pos) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = num;

    // increment count of sorted elements in array
    count++;

    // if odd number of integers are read from stream
    // then middle element in sorted order is median
    // else average of middle elements is median
    if (count % 2 != 0) {
      console.log(arr[Math.floor(count / 2)]);
    } else {
      console.log((arr[count / 2 - 1] + arr[count / 2]) / 2);
    }
  }
};

let arr = [2, 1, 5, 7, 2, 0, 5];
let n = arr.length;
console.log(printMedian(arr, n));
