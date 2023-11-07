const $openModal = document.querySelector('.open-modal-button');
const $modalMain = document.querySelector('#modal-main');
const $surveyButton = document.querySelector('.survey-button');

$openModal.addEventListener('click', function (event) {
  $modalMain.style.display = 'flex';
});
$surveyButton.addEventListener('click', function (event) {
  $modalMain.style.display = 'none';
});
