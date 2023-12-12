import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

const left = Number(process.argv[2]);
const right = Number(process.argv[4]);
const command = process.argv[3];
let answer = null;
switch (command) {
  case 'add':
    answer = add(left, right);
    break;
  case 'subtract':
    answer = subtract(left, right);
    break;
  case 'multiply':
    answer = multiply(left, right);
    break;
  case 'divide':
    answer = divide(left, right);
    break;
}

console.log(answer);
