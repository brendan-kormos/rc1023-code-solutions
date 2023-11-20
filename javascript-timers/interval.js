const $display = document.querySelector('.countdown-display');

let counter = 4;
const intervalID = setInterval(function () {
  counter--;
  $display.textContent = counter;
  if (counter === 0) {
    $display.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
}, 1 * 1000);
