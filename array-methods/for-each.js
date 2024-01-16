const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

values.forEach(function (element) {
  console.log('value', element);
});

values.forEach(function (element, index) {
  console.log('value', values[values.length - index - 1]);
});
