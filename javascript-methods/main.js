const num1 = 10;
const num2 = 30;
const num3 = 100;
const maximumValue = Math.max(num1, num2, num3);
console.log('maximumValue:', maximumValue);

const heroes = ['Batman', 'Ironman', 'Spiderman', 'Superman'];
const randomNumber = Math.random() * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

// array methods

const library = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
  },
  {
    title: 'The Fault in Our Stars',
    author: 'John Green',
  },
  {
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Jenkins Reid',
  },
];
const lastBook = library.pop();
console.log('lastBook:', lastBook);

const firstBook = library.shift();
console.log('firstBook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

// string methods

const fullName = 'Brendan Kormos';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
