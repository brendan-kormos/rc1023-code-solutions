function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}
const convertMinutesToSecondsResult: number = convertMinutesToSeconds(20);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name: string): string {
  return 'Hey, ' + name;
}
const greetResult: string = greet('Brendan');
console.log('greetResult:', greetResult);

function getArea(width: number, height: number): number {
  return width * height;
}
const getAreaResult: number = getArea(10, 30);
console.log('getAreaResult:', getAreaResult);

function getFirstName(person: { firstName: string }): string {
  return person.firstName;
}
const person: { firstName: string; lastName: string } = {
  firstName: 'Brendan',
  lastName: 'Kormos',
};
const getFirstNameResult: string = getFirstName(person);
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array: string[]): string {
  return array[array.length - 1];
}
const testArray: string[] = [
  'firstItem',
  'secondItem',
  'thirdItem',
  "i'm last!",
];
const getLastElementResult: string = getLastElement(testArray);
console.log('getLastLementResult:', getLastElementResult);
