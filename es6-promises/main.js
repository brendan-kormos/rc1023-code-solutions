import { takeAChance } from './take-a-chance.js';
const promise = takeAChance('brendan kormos');
promise
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value);
  });
