const width: number = 5;
const height: number = 10;

const area: number = width * height;
console.log('area', area);
console.log('area typeof', typeof area);

const bill: number = 100;
const payment: number = 100;
const change: number = payment - bill;
console.log('change', change);
console.log('change typeof', typeof change);

const quizzes: number = 10;
const midterm: number = 10;
const final: number = 10;

const grade: number = (quizzes + midterm + final) / 3;
console.log('grade', grade);
console.log('grade typeof', typeof grade);

const firstName: string = 'Brendan';
const lastName: string = 'Kormos';
const fullName: string = firstName + ' ' + lastName;
console.log('fullName', fullName);
console.log('fullName typeof', typeof fullName);

const pH: number = 6;
const isAcidic: boolean = pH < 7;
console.log('isAcidic', isAcidic);
console.log('isAcidic typeof', typeof isAcidic);

const headCount: number = 20;
const isSparta: boolean = headCount === 300;
console.log('isSparta', isSparta);
console.log('isSparta typeof', typeof isSparta);

const motto: string = fullName + ' is the GOAT';
console.log('motto', motto);
console.log('motto typeof', typeof motto);
