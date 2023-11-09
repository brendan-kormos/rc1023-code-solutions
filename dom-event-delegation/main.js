const $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', function (event) {
  const $target = event.target;
  const tagName = $target.tagName;
  console.log('event target', $target);
  console.log('event target tag name', tagName);
  if (tagName === 'BUTTON') {
    const $closest = $target.closest('.task-list-item');
    console.log('closest element', $closest);
    $closest.remove();
  }
});
