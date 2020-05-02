// My soultion thought process
var isSameTree = function(p, q) {
  if (p.val !== q.val) return false;

  if (p === null && q === null) return true;

  if ((p.left !== null && q.left === null) || (p.left === null && q.left !== null)) {
    return false;
  }

  if ((p.right !== null && q.right === null) || (p.right === null && q.right !== null)) {
    return false;
  }

  if (p.val === q.val) {
    if (p.left === null && q.left === null) {
      if (p.right === null && q.right === null) {
        return true;
      } else if ((p.left !== null && q.left === null) || (p.left === null && q.left !== null)) {
        return false;
      } else if ((p.right !== null && q.right === null) || (p.right === null && q.right !== null)) {
        return false;
      } else if (p.left.val !== q.left.val || p.right.val !== q.right.val) {
        return false;
      }
    } else if (p.left !== null && q.left !== null) {
      if (p.left.val === q.left.val) {
        if (p.right.val === q.right.val) return true;
        else return false;
      } else return false;
    } 
  }
};

console.log(isSameTree([1, null, 3], [1, null, 3]));


// Initial Solution -  46/57 test cases passed!
// if(p === undefined || q === undefined) return false;
//   if (p === null && q === null) return true;
//   else if(p === null && q !== null) return false;
//   else if(p !== null && q === null ) return false

//   if (p.val !== q.val) return false;

//   if(p.left !== null && q.left === null || p.left === null && q.left !== null  ){
//     return false
//   }
//   if(p.right !== null && q.right === null || p.right === null && q.right !== null){
//     return false;
//   }
//   if (p.val === q.val) {
//     if (p.left === null && q.left === null) {
//      if (p.right === null && q.right === null) return true;
//          if (p.left !== q.left || p.right !== q.right) return false;
//               else return true;
//    } else if(p.left.val === q.left.val){
//             if(p.right.val === q.right.val) return true
//             else return false;
//    } else return false;
//   }

// Change
// var isSameTree = function(p, q) {
//   console.log(p.length)
//  if (p === null && q === null) return true;
//  else if(p === null && q !== null) return false;
//  else if(p !== null && q === null ) return false
  
//  if (p.val !== q.val) return false;
 
  
//  if ((p.left !== null && q.left === null) || (p.left === null && q.left !== null)) {
//    return false;
//  }

//  if ((p.right !== null && q.right === null) || (p.right === null && q.right !== null)) {
//    return false;
//  }

//  if (p.val === q.val) {
//    if (p.left === null && q.left === null) {
//     if (p.right === null && q.right === null) {
//        return true;
//      } else if ((p.left !== null && q.left === null) || (p.left === null && q.left !== null)) {
//        return false;
//      } else if ((p.right !== null && q.right === null) || (p.right === null && q.right !== null)) {
//        return false;
//      } else if (p.left.val !== q.left.val || p.right.val !== q.right.val) {
//        return false;
//      }
//    } else if (p.left !== null && q.left !== null) {
//      if (p.left.val === q.left.val) {
//        if (p.right.val === q.right.val) return true;
//        else return false;
//      } else return false;
//    } 
//  }
// };

