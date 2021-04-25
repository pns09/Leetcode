// Can be done using Map also. Learn to use map.
/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var uniqueOccurrences = function (arr) {
    let uniqueObj = {};
    for (let i = 0; i < arr.length; i++) {
      uniqueObj[arr[i]] = (uniqueObj[arr[i]] || 0) + 1;
    }
    let uniqueVals = Object.values(uniqueObj);
    let res = new Set([...uniqueVals]);
  
    if(uniqueVals.length === res.size) return true;
  
    return false;
  };
  
  console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]))