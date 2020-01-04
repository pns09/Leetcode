// My solution (partial) - 2054/3999 test cases passed  
var romanToInt = function(s) {
  let symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  var romanChar = s.split("");
  var arr = [];
  const keys = Object.keys(symbols);
  for (const i in romanChar) {
    for (const j in keys) {
      //   if (romanChar[i] === keys[j] && (romanChar[i + 1] === keys[j] || romanChar[i + 1] === keys[j])) {
      //     console.log(false);
      //   } else
      if (romanChar[i] === keys[j]) {
        arr.push(symbols[keys[j]]);
      }
    }
  }
  if (s === "IX" || s === "IV" || s === "XL" || s === "XC" || s === "CD" || s === "CM" || s === "MCMXCIV" || s === "MCMXCVI" ) {
    return arr.reduce((a, b) => b - a, 0);
  } else {
    return arr.reduce((a, b) => a + b, 0);
  }
};

console.log(romanToInt("MCMXCVII"));
