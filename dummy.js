// Good example of local and global scopes in this problem can be seen.
function convertlowerCase(data) {
	var newArrObj = [];
	var newobj = {};
	data.map(function (item) {
		var key,
			keys = Object.keys(item);
		var n = keys.length;
		while (n--) {
			key = keys[n];
			newobj[key.toLowerCase()] = item[key];
		}
		newArrObj.push(newobj);
	});
	return newArrObj;
}

console.log(convertlowerCase());






















// const http = require("https");
// const dns = require("dns");

// const ipAddressReader = () => {
// 	let arr = [];
// 	dns.lookup("almhuette-raith.at", (err, address, family) => {
// 		if (err) console.error(err);
// 		console.log(`IP address is : ${address} and it is : ${family}`);
// 		arr.push(address);
// 	});
	

// 	return arr;
// };


// let addresses = [];
	// const options = {
	// 	hostname: "http://www.almhuette-raith.at",
	// 	path: "/apache-log/access.log",
	// 	port: 443,
	// 	method: "GET",
	// };

	// const req = http.request(options, (res) => {
	// 	console.log(`statusCode: ${res.statusCode}`);
	// 	res.on("data", (d) => {
	// 		addresses.push(d);
	// 	});
	// });

	// req.on("error", (error) => {
	// 	console.error(error);
	// });

	// req.end();