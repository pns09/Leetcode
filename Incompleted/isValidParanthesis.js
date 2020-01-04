// My solution - not submitted!
var isValid = function(s){ 
    if(s === null || s.length <=0) return true;
      var c = s.split('');
      var arr = [];
    
      c.forEach((ele) => {
          if(ele === '(') {
              arr.push(')');
          } else if(ele === '{') {
              arr.push('}');
          } else if(ele === '['){
              arr.push(']'); 
          } else if( arr.length === 0 || ele !== arr.pop()) {
              return false;
          } 
          if(arr.length === 0) {
              return true;
          } return false;
      }) 
  }
  console.log(isValid('({)'));