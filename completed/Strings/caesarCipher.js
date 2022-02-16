function caesarCipher(s, k) {
  // Write your code here
  let originalAlpsMap = {
    a: 'a',
    b: 'b',
    c: 'c',
    d: 'd',
    e: 'e',
    f: 'f',
    g: 'g',
    h: 'h',
    i: 'i',
    j: 'j',
    k: 'k',
    l: 'l',
    m: 'm',
    n: 'n',
    o: 'o',
    p: 'p',
    q: 'q',
    r: 'r',
    s: 's',
    t: 't',
    u: 'u',
    v: 'v',
    w: 'w',
    x: 'x',
    y: 'y',
    z: 'z',
  };
  let originalAlpsArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let cipherStr = '';
  k = k % originalAlpsArr.length;

  for (let i = 0; i < k; i++) {
    originalAlpsArr.push(originalAlpsArr.shift());
  }

  let mapKeys = Object.keys(originalAlpsMap);
  for (let i = 0; i < originalAlpsArr.length; i++) {
    originalAlpsMap[mapKeys[i]] = originalAlpsArr[i];
  }

  for (let i = 0; i < s.length; i++) {
    if (isUpper(s[i])) {
      cipherStr += originalAlpsMap[s[i].toLowerCase()].toUpperCase();
    } else if (originalAlpsMap[s[i]]) {
      cipherStr += originalAlpsMap[s[i]];
    } else {
      cipherStr += s[i];
    }
  }
  return cipherStr;
}

function isUpper(str) {
  return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}

console.log(caesarCipher('1X7T4VrCs23k4vv08D6yQ3S19G4rVP188M9ahuxB6j1tMGZs1m10ey7eUj62WV2exLT4C83zl7Q80M', 27));
