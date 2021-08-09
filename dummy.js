
// /**
//  * @param {number[]} inventory
//  * @param {number} orders
//  * @return {number}
//  */
// var maxProfit = function (inventory, orders) {
//   inventory = inventory.sort((a, b) => a - b);
//   let left = inventory[0];

//   // let i = right;
//   let maxTotal = 0;
//   let count = 0;
//   for (let i = inventory.length - 1; i >= 0; i--) {
//     let currentNum = inventory[i];
//     while (currentNum > left && count < orders) {
//       maxTotal += currentNum;
//       currentNum--;
//       count++;
//     }
//   }
//   if (count !== orders) {
//     while (count < orders) {
//       maxTotal += left;
//       count++;
//       left--;
//     }
//   }
//   return maxTotal;
// };

// console.log(maxProfit([2, 5], 4));
