const $lightBulb = document.querySelector('.light-bulb');
const $backgroundLight = document.querySelector('.background-light');

let on = true;

$lightBulb.addEventListener('click', function (event) {
  on = !on;
  // on
  if (on) {
    $lightBulb.classList.remove('light-bulb-off');
    $backgroundLight.classList.remove('background-light-off');
    return;
  }
  // off
  $lightBulb.classList.add('light-bulb-off');
  $backgroundLight.classList.add('background-light-off');
});
