async function fetchGet(url) {
  try {
    const res = await fetch(url, {
      // Default options are marked with *
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    if (res.ok) {
      return res;
    } else throw new Error(`${res.status} ${res.statusText}`);
  } catch (err) {
    return err;
  }
}

async function getUsers() {
  try {
    const res = await fetchGet('https://jsonplaceholder.typicode.com/users');
    if (res.ok && res.status === 200) {
      const users = await res.json();
      console.log('users', users);
    } else throw new Error(`${res.status} ${res.statusText}`);
  } catch (err) {
    console.error(err);
  }
}

async function getPokemon() {
  try {
    const res = await fetchGet('https://pokeapi.co/api/v2/pokemon/1');
    if (res.ok && res.status === 200) {
      const pokemon = await res.json();
      console.log('pokemon', pokemon);
    } else throw new Error(`${res.status} ${res.statusText}`);
  } catch (err) {
    console.error(err);
  }
}

getUsers();

getPokemon();
