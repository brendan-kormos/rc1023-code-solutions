const $textBody = document.querySelector('.text-body');
const textMessage = 'grumpy wizards make toxic brew';
const spanElements = [];
let letterNum = 0;
// let numWrong = 0

for (let i = 0; i < textMessage.length; i++) {
  const newElement = document.createElement('span');

  newElement.className = 'text';
  if (i === 0) newElement.classList.add('selected');
  const letter = textMessage[i];
  if (letter === ' ') {
    // letter = '&apos;';
  }
  newElement.textContent = letter;
  spanElements.push(newElement);
  $textBody.appendChild(newElement);
}

document.addEventListener('keydown', function (event) {
  if (letterNum === spanElements.length) return;

  const keyPress = event.key;
  const correctKey = textMessage[letterNum];
  const currentElement = spanElements[letterNum];

  if (keyPress === correctKey) {
    currentElement.classList.remove('incorrect');
    currentElement.classList.add('correct');
    currentElement.classList.remove('selected');

    const nextElement = spanElements[letterNum + 1];
    if (nextElement) nextElement.classList.add('selected');
    letterNum++;
  } else {
    currentElement.classList.add('incorrect');
    // numWrong ++
  }
});
