/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees10
 * @param {number} id
 * @return {number}
 */
 var getImportance = function (employees, id) {
    let totalImportance = 0;
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        totalImportance = employees[i].importance;
        if (employees[i].subordinates.length > 0) {
          return checkSubordinates(employees, employees[i].subordinates, totalImportance);
        }
      }
    }
    return totalImportance;
  };
  
  const checkSubordinates = (employees, subordinatesArr, totalImportance) => {
    for (let k = 0; k < subordinatesArr.length; k++) {
      for (let j = 0; j < employees.length; j++) {
        if (subordinatesArr[k] === employees[j].id) {
          totalImportance += employees[j].importance;
          if (employees[j].subordinates.length > 0) {
            subordinatesArr.push(...employees[j].subordinates);
          }
        }
      }
    }
    return totalImportance;
  };

  // BFS solution - O(N^2) time complexity. - learn to do problems this way!
  var getImportance = function (employees, id) {
    let ans = 0;
  
    const findNext = (id) => employees.filter((emp) => emp.id == id)[0];
    let queue = [findNext(id)];
  
    while (queue.length) {
      const current = queue.shift();
      ans += current.importance;
      for (let sub of current.subordinates) {
        queue.push(findNext(sub));
      }
    }
    return ans;
  };
  
  console.log(
    getImportance(
      [
        { id: 1, importance: 5, subordinates: [2, 3] },
        { id: 2, importance: 3, subordinates: [] },
        { id: 3, importance: 3, subordinates: [] },
      ],
      1
    )
  );
  
  // [
  //   { id: 1, importance: 5, subordinates: [2, 3] },
  //   { id: 2, importance: 3, subordinates: [4] },
  //   { id: 3, importance: 4, subordinates: [] },
  //   { id: 4, importance: 1, subordinates: [] },
  // ]
  
  // [
  //   { id: 1, importance: 5, subordinates: [2, 3] },
  //   { id: 2, importance: 3, subordinates: [] },
  //   { id: 3, importance: 3, subordinates: [] },
  // ]
  