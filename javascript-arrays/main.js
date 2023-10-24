const colors = ['red', 'white', 'blue'];
console.log('colors[0]:', colors[0]);
console.log('colors[1]:', colors[1]);
console.log('colors[2]:', colors[2]);

console.log(
  'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.'
);

colors[2] = 'green';

console.log(
  'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.'
);

console.log('colors:', colors);

const students = ['brendan', 'paxton', 'eduardo'];
const numberOfStudents = students.length;
console.log('number of students:', numberOfStudents);
const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex];
console.log('lastStudent:', lastStudent);
console.log('students:', students);
