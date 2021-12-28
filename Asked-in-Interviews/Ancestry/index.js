(function () {
  const descriptiveText = {};

  descriptiveText.ford =
    'Ford F-150: Quisque tincidunt, sem et varius molestie, nisi dolor gravida tellus, nec facilisis massa erat at tortor. Phasellus lacus enim, sagittis a vulputate vitae, congue a enim. Vivamus a tincidunt nulla, vel fringilla risus. Curabitur feugiat et sem eu lacinia. Nulla in ligula efficitur, ornare tortor eget, luctus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eleifend metus vel dignissim eleifend. Proin faucibus quis massa et eleifend.';

  descriptiveText.chevrolet =
    'Chevrolet Camaro: Nam ultrices fringilla auctor. Aliquam quis nunc sit amet dui imperdiet vehicula non at nunc. Maecenas blandit lorem a massa molestie posuere. Quisque aliquet ac velit ut porta. Aenean ac pharetra purus, et vulputate nulla. Vestibulum aliquam, ipsum id bibendum varius, enim neque dictum metus, aliquet lobortis enim purus non turpis. Cras interdum vestibulum sem, eget semper magna finibus et. Ut lorem eros, bibendum ut tincidunt eget, lacinia sit amet justo. Praesent vehicula malesuada diam, at auctor nibh laoreet sed. Donec tempor mi lectus, eget auctor eros sodales at. Aliquam tincidunt vehicula dui pulvinar varius. Vivamus faucibus felis sagittis, semper tortor quis, rutrum sem. Donec finibus, nunc ac vehicula varius, enim diam lobortis dui, nec varius orci lectus nec orci. Sed accumsan eget dui sed gravida.';

  descriptiveText.jeep =
    'Jeep Wrangler: Nulla facilisi. Aenean eu enim scelerisque, gravida magna quis, imperdiet tellus. Morbi rhoncus, orci lobortis laoreet finibus, ipsum magna tristique metus, in convallis tellus neque vitae urna. Cras est est, venenatis quis luctus et, lacinia at arcu. Aliquam lobortis felis nisi, in viverra nulla egestas non. Curabitur sit amet imperdiet risus. Duis eget odio a ligula finibus dictum id quis ex.';

  const map = {
    'Ford F-150': 'ford',
    'Chevrolet Camaro': 'chevrolet',
    'Jeep Wrangler': 'jeep',
  };

  const divClass = document.getElementsByClassName('vehicleCard');
  const vehicleDetails = document.getElementById('vehicleDetailsOverlay');

  for (let i = 0; i < divClass.length; i++) {
    divClass[i].addEventListener('click', () => {
      let state = map[divClass[i].getElementsByClassName('vehicleCardDescription')[0].innerText];
      vehicleDetails.style.display = 'block';
      vehicleDetails.children[0].innerHTML = state ? descriptiveText[state]: 'No Description available.' ;
      return;
    });
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == vehicleDetails) {
      vehicleDetails.style.display = 'none';
    }
  };
})();
