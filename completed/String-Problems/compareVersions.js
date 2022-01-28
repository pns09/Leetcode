// My completed solution - beats 98.1% submissions
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let count = 0;
  let v1 = version1.split('.');
  let v2 = version2.split('.');

  for (let i = 0; i < v1.length; i++) {
    let length1 = v1.length;
    let length2 = v2.length;
    if (parseInt(v1[0]) == parseInt(v2[0]) && length1 < length2) {
      v1.push(0);
    }
    if (parseInt(v1[0]) == parseInt(v2[0]) && length1 > length2) {
      v2.push(0);
    }
    if (parseInt(v1[i]) == parseInt(v2[i])) {
      count = 0;
    } else if (parseInt(v1[i]) > parseInt(v2[i])) {
      return (count = 1);
    } else {
      return (count = -1);
    }
  }
  return count;
};

console.log(compareVersion('1.001', '1.01'));
