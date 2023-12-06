function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
var convertMinutesToSecondsResult = convertMinutesToSeconds(20);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);
function greet(name) {
  return 'Hey, ' + name;
}
var greetResult = greet('Brendan');
console.log('greetResult:', greetResult);
function getArea(width, height) {
  return width * height;
}
var getAreaResult = getArea(10, 30);
console.log('getAreaResult:', getAreaResult);
function getFirstName(person) {
  return person.firstName;
}
var person = {
  firstName: 'Brendan',
  lastName: 'Kormos',
};
var getFirstNameResult = getFirstName(person);
console.log('getFirstNameResult:', getFirstNameResult);
function getLastElement(array) {
  return array[array.length - 1];
}
var testArray = ['firstItem', 'secondItem', 'thirdItem', "i'm last!"];
var getLastElementResult = getLastElement(testArray);
console.log('getLastLementResult:', getLastElementResult);
