var plusOne = function(digits) {
  var arr = [];
  if (digits.length === 0) {
    arr.push(1);
    return arr;
  }
  if (digits.length === 1) {
    arr.push(digits[0] + 1);
    let newAr = [];
    if (arr[0] >= 10) {
      arr.forEach((element) => {
        let rem =  Math.round(element % 10);
        let quotient = Math.round(element / 10);
        return newAr.push(quotient, rem);
      });
      return newAr;
    } else return arr;
  }

  var lastElem = digits.pop();
  lastElem += 1;
  for (var i = 0; i <= digits.length - 1; i++) {
    arr.push(digits[i]);
    if (i == digits.length - 1) {
      arr.push(lastElem);
      return arr;
    }
  }
};

console.log(plusOne([12]));
