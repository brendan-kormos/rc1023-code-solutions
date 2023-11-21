const $userList = document.querySelector('#user-list');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log('status', xhr.status);
  console.log('response', xhr.response);
  for (let i = 0; i < xhr.response.length; i++) {
    const $newLi = document.createElement('li');
    $newLi.textContent = xhr.response[i].name;
    $userList.append($newLi);
  }
});
xhr.send();
