let redirectBtn = document.getElementsByClassName("redirect-url");

redirectBtn[0].click();
const url = new URL("https://customerservice.cloudapps.cisco.com/");

if (document.readyState === "complete") {
	let helpBtn = document.getElementsByClassName("icon-help");
    helpBtn[0].click();
    console.log('clicked')
}
