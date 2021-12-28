/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  // O(nlogn) | O(1)
  let unitCount = 0;
  boxTypes.sort((a, b) => (b[1] > a[1] ? 1 : -1));

  for (let i = 0; i < boxTypes.length; i++) {
    let unitsPerBox = boxTypes[i][1];
    let boxCount = Math.min(truckSize, boxTypes[i][0]);
    unitCount += boxCount * unitsPerBox;
    truckSize -= boxCount;
    if (truckSize == 0) {
      return unitCount;
    }
  }
  return unitCount;
};

console.log(
  maximumUnits(
    [
      [1, 3],
      [5, 5],
      [2, 5],
      [4, 2],
      [4, 1],
      [3, 1],
      [2, 2],
      [1, 3],
      [2, 5],
      [3, 2],
    ],
    35
  )
);
