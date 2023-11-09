const $tabContainer = document.querySelector('.tab-container'); // tab container
const $tabs = document.querySelectorAll('.tab'); // tabs
const $views = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  const $target = event.target;
  if ($target.matches('.tab')) {
    const dataView = $target.getAttribute('data-view');
    for (let i = 0; i < $tabs.length; i++) {
      const $tab = $tabs[i];
      if ($tab === $target) {
        $tab.classList.add('active');
      } else {
        $tab.classList.remove('active');
      }
    }
    for (let i = 0; i < $views.length; i++) {
      const $view = $views[i];
      if ($view.getAttribute('data-view') === dataView) {
        $view.classList.remove('hidden');
      } else {
        $view.classList.add('hidden');
      }
    }
  }
});
