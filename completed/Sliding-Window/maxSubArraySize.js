const max_sub_array_of_size_k = function (k, arr) {
  let maxArr = [];
  let sum = 0;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    if (right + 1 >= k) {
      maxArr.push(sum);
      sum = sum - arr[left];
      left++;
    }
  }
  return Math.max(...maxArr);
};

console.log(max_sub_array_of_size_k((k = 2), [2, 5, 1, 3, 2]));
