const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const evenFiltered = numbers.filter(function (value, index) {
  return value % 2 === 0;
});

console.log('even filtered', evenFiltered);

const noD = names.filter(function (value, index) {
  return !value.toLowerCase().includes('d');
});

console.log('no D filtered', noD);
