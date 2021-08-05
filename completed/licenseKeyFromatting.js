/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var licenseKeyFormatting = function (s, k) {
    s = s.replace(/-/g, '').toUpperCase().split('').reverse();
    let key = [];
    let counter = 0;
  
    for (let i = 0; i < s.length; i++) {
      counter++;
      if (counter === k) {
        if (i === s.length - 1) {
          key.push(s[i]);
        } else {
          key.push(s[i], '-');
        }
        counter = 0;
      } else {
        key.push(s[i]);
      }
    }
    return key.reverse().join('');
  };
  
  console.log(licenseKeyFormatting((s = '2-5g-3-J'), (k = 2)));
  
  // LC solution
  // var licenseKeyFormatting = function (S, K) {
  //   const newStr = S.replace(/-/g, '').toUpperCase(), // Remove existing dashes and convert any lowercase letters to uppercase
  //     arr = newStr.split(''); // Convert string to an array so we can manipulate it
  
  //   for (let i = arr.length - 1 - K; i >= 0; i -= K) {
  //     // Loop through array backwards and decrement by value of K
  //     arr[i] = arr[i] + '-';
  //   }
  
  //   return arr.join('');
  // };
  