const adRemove = setInterval(() => {
  const adBtn = document.getElementsByClassName('ytp-ad-skip-button');
  if (adBtn.length) {
    adBtn[0].click();
    console.log('Skip ad button clicked!');
  }
}, 1000);

// Cisco COBC training
// const clickOnNextBtn = setInterval(() => {
//   const navEleIds = document.getElementById('nav-controls');
//   const controlBtns = navEleIds.getElementsByTagName('button');
//   if (controlBtns && !controlBtns[1].disabled) {
//     controlBtns[1].click();
//     console.log('Next button clicked!');
//   }
// }, 2000);
