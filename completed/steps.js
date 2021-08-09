// using 2 variables - first thought process.
function steps(n) {
    let hashStr = '';
    let stepShape = '';
    for (let i = 0; i < n; i++) {
      hashStr += '#';
      stepShape += hashStr;
      while (stepShape.length !== n) {
        stepShape += ' ';
      }
      console.log(stepShape);
      stepShape = '';
    }
  }
  
  // using trim() on existing variable - 2nd approach
  function steps(n) {
    let stepShape = '';
    for (let i = 0; i < n; i++) {
      stepShape += '#';
      while (stepShape.length !== n) {
        stepShape += ' ';
      }
      console.log(stepShape);
      stepShape = stepShape.trim();
    }
  }
  
  console.log(steps(4));
  