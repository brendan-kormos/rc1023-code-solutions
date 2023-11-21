const carouselImages$ = document.querySelectorAll('.carousel-image');
const $carouselProgressContainer = document.querySelector('.carousel-progress');
const carouselProgressCircles$ =
  $carouselProgressContainer.querySelectorAll('.fa-circle');
const $previous = document.querySelector('.previous');
const $next = document.querySelector('.next');

let intervalID = null;
let currentImage = 0;

function resetInterval() {
  if (intervalID) {
    clearInterval(intervalID);
  }
  intervalID = setInterval(nextImage, 3 * 1000);
}

function setImage(number) {
  resetInterval();
  carouselImages$[currentImage].classList.add('hidden');
  carouselProgressCircles$[currentImage].classList.add('far');
  carouselProgressCircles$[currentImage].classList.remove('fas');
  currentImage = number;
  carouselImages$[currentImage].classList.remove('hidden');
  carouselProgressCircles$[currentImage].classList.add('fas');
  carouselProgressCircles$[currentImage].classList.remove('far');
}

function nextImage() {
  let newNum = currentImage + 1;
  if (newNum > carouselImages$.length - 1) newNum = 0;
  setImage(newNum);
  currentImage = newNum;
}
function previousImage() {
  let newNum = currentImage - 1;
  if (newNum < 0) newNum = carouselImages$.length - 1;
  setImage(newNum);
  currentImage = newNum;
}

$carouselProgressContainer.addEventListener('click', function (event) {
  const $target = event.target;
  if ($target.classList.contains('fa-circle')) {
    for (let i = 0; i < carouselProgressCircles$.length; i++) {
      const element = carouselProgressCircles$[i];
      if (element === $target) {
        setImage(i);
      }
    }
  }
});

resetInterval();

$next.addEventListener('click', nextImage);
$previous.addEventListener('click', previousImage);
