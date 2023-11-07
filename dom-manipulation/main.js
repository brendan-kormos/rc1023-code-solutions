const $hotbutton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');

let clicks = 0;
const clicksObj = { 4: 'cold', 7: 'cool', 10: 'tepid', 13: 'warm', 16: 'hot' };

$hotbutton.addEventListener('click', function (event) {
  clicks++;
  $clickCount.textContent = 'Clicks: ' + clicks;
  const setText = clicksObj[clicks + 3];
  if (setText) {
    $hotbutton.classList.remove($hotbutton.classList[1]);
    $hotbutton.classList.add(setText);
  } else if (clicks > 16 && $hotbutton.classList[1] !== 'nuclear') {
    $hotbutton.classList.remove($hotbutton.classList[1]);
    $hotbutton.classList.add('nuclear');
  }
});
