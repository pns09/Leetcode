function chunk(array, size) {
  let finalArr = [];
  let chunkArr = [];
  for (let i = 0; i < array.length; i++) {
    chunkArr.push(array[i]);
    if (size === chunkArr.length) {
      finalArr.push(chunkArr);
      chunkArr = [];
    }
  }
  if (chunkArr.length > 0) finalArr.push(chunkArr);
  return finalArr;
}

console.log(chunk([1, 2, 3, 4], 2));
