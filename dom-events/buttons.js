function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('target', event.target);
}

document.querySelector('.click-button').addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('target', event.target);
}

document
  .querySelector('.hover-button')
  .addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double clicked');
  console.log('event:', event);
  console.log('target', event.target);
}

document
  .querySelector('.double-click-button')
  .addEventListener('dblclick', handleDoubleClick);
