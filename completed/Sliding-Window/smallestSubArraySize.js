const smallest_subarray_with_given_sum = function (s, arr) {
    let k = 1;
    let maxItem = Math.max(...arr);
    if (maxItem >= s) {
      return 1;
    }
    const result = findLength(s, arr, k + 1);
    return result;
  };
  
  const findLength = (s, arr, k) => {
    let subArr = [];
    let sum = 0;
    let left = 0;
  
    for (let right = 0; right < arr.length; right++) {
      sum += arr[right];
      subArr.push(arr[right]);
      if (right + 1 >= k) {
        if (sum >= s) {
          return subArr.length;
        }
        subArr.shift();
        sum = sum - arr[left];
        left++;
      }
    }
    if (k > arr.length) return 0;
    else return findLength(s, arr, k + 1);
  };
  
  const result = smallest_subarray_with_given_sum((S = 7), [1, 1, 1, 1, 3]);
  console.log(result);