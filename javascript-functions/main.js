function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
const convertMinutesToSecondsResult = convertMinutesToSeconds(20);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  return 'Hey, ' + name;
}
const greetResult = greet('Brendan');
console.log('greetResult:', greetResult);

function getArea(width, height) {
  return width * height;
}
const getAreaResult = getArea(10, 30);
console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  return person.firstName;
}
const person = { firstName: 'Brendan', lastName: 'Kormos' };
const getFirstNameResult = getFirstName(person);
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  return array[array.length - 1];
}
const testArray = ['firstItem', 'secondItem', 'thirdItem', "i'm last!"];
const getLastElementResult = getLastElement(testArray);
console.log('getLastLementResult:', getLastElementResult);
