const adRemove = setInterval(() => {
	const adBtn = document.getElementsByClassName("ytp-ad-skip-button");
	if (adBtn.length) {
		adBtn[0].click();
		console.log("Skip ad button clicked!");
	}
}, 1000);


// Cisco training
// setInterval(() => {
// 	const navEleIds = document.getElementById('nav-controls');
// 	navEleIds.getElementsByTagName('button')[1].click();
// }, 2000);
