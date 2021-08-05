function maxChar(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
      obj[str[i]] = (obj[str[i]] || 0) + 1;
    }
  
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    let maxSoFar = 0;
  
    for (let j = 0; j < values.length; j++) {
      maxSoFar = Math.max(maxSoFar, values[j]);
    }
  
    for (let k = 0; k < keys.length; k++) {
      if (obj[keys[k]] === maxSoFar) {
        return keys[k];
      }
    }
  }
  
  console.log(maxChar('abcccccd'));
  