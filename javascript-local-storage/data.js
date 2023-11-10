/* exported todos */

let todos = [];
const previousTodosJSON = localStorage.getItem('javascript-local-storage');
if (previousTodosJSON !== null) todos = JSON.parse(previousTodosJSON);

function dataChanged(event) {
  const stringified = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', stringified);
  // event.preventDefault(); // non legacy
  // event.returnValue = true; // legacy support
}
window.addEventListener('beforeunload', dataChanged);
