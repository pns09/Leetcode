/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
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
