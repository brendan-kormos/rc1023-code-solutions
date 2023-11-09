const array = [
  {
    isbn: '111',
    title: 'book1',
    author: 'authorOne',
  },
  {
    isbn: '222',
    title: 'book2',
    author: 'authorTwo',
  },
  {
    isbn: '333',
    title: 'book3',
    author: 'authorThree',
  },
];

console.log('array:', array, 'type:', typeof array);
const jsonified = JSON.stringify(array);
console.log('jsonified:', jsonified, 'typeof:', typeof jsonified);

const stringJSON = '{"id":123,"name":"brendan"}';
console.log('stringJSON:', stringJSON);
console.log('typeof:', typeof stringJSON);

const obj = JSON.parse(stringJSON);
console.log('parsedObject:', obj);
console.log('type:', typeof obj);
