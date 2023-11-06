function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('target', event.target);
}

document.querySelector('.click-button').addEventListener('click', handleClick);

function handleMouserover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('target', event.target);
}

document
  .querySelector('.hover-button')
  .addEventListener('mouseover', handleMouserover);

function handleDoubleClick(event) {
  console.log('button double clicked');
  console.log('event:', event);
  console.log('target', event.target);
}

document
  .querySelector('.double-click-button')
  .addEventListener('dblclick', handleDoubleClick);
