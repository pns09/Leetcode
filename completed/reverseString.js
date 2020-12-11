
// My solution - not so efficiet but solves the usecase. took 748ms to execute 478 testcases 
var reverseString = function (s) {
    let copyArr = [...s];
	for (let i = 0; i < copyArr.length; i++) {
		let str = s.splice(i,1);
		s.unshift(...str);
    }
    return s;
};
console.log(reverseString(["h", "e", "l", "l", "o"]));

