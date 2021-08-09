function capitalize(str) {
    const strArr = str.split(' ');
 
   for (let i = 0; i < strArr.length; i++) {
     strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
   }
   return strArr.join(' ');
 }
 
 console.log(capitalize('a short sentence'));
  