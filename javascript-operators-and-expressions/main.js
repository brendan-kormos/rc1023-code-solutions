const width = 5;
const height = 8;
const area = width * height;
console.log('area: ', area);
console.log('typeof area: ', typeof area);

const bill = 10;
const payment = 20;
const change = payment - bill;
console.log('change:', change);
console.log('typeof change:', typeof change);

const quizzes = 80;
const midterm = 95;
const final = 98;
const grade = (quizzes + midterm + final) / 3;
console.log('grade:', grade);
console.log('typeof grade:', typeof grade);

const firstName = 'Brendan';
const lastName = 'Kormos';
const fullName = firstName + ' ' + lastName;
console.log('fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

const ph = 8;
const isAcidic = ph < 7;
console.log('isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

const headCount = 300;
const isSparta = headCount === 300;
console.log('isSparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);

let motto = fullName;
motto += ' is the GOAT';
console.log('motto:', motto);
console.log('typeof motto:', typeof motto);
