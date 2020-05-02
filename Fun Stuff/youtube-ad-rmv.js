const adRemove = setInterval(() => {
	const adBtn = document.getElementsByClassName("ytp-ad-skip-button");
	if (adBtn.length) {
		adBtn[0].click();
		console.log("Skip ad button clicked!");
	}
}, 1000);
