const $inputElements = document.querySelectorAll('input, textarea');
function handleFocus(event) {
  console.log('focus event was fired', event.target.name);
}
function handleBlur(event) {
  console.log('blur event was fired', event.target.name);
}
function handleInput(event) {
  console.log('input event was fired', event.target.name);
  console.log('value', event.target.value);
}

for (let i = 0; i < $inputElements.length; i++) {
  $inputElements[i].addEventListener('blur', handleBlur);
  $inputElements[i].addEventListener('focus', handleFocus);
  $inputElements[i].addEventListener('input', handleInput);
}
