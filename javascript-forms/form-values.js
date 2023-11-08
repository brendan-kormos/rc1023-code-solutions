const $formElement = document.querySelector('form');

$formElement.addEventListener('submit', function (event) {
  event.preventDefault();
  const elements = $formElement.elements;
  console.log('name', elements.name.value);
  console.log('email', elements.email.value);
  console.log('message', elements.message.value);
  $formElement.reset();
});
