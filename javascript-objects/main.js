const student = {
  firstName: 'Brendan',
  lastName: 'Kormos',
  age: 21,
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Indie Game Developer';
console.log('livesInIrvine:', student.livesInIrvine);
console.log('previousOccupation:', student.previousOccupation);

console.log('student:', student);

const vehicle = {
  make: 'Mazda',
  model: 'Miata MX-5',
  year: 1993,
};

vehicle['color'] = 'Red';
vehicle['isConvertible'] = true;

console.log('color:', vehicle['color']);
console.log('isConvertible:', vehicle['isConvertible']);
console.log('vehicle:', vehicle);

const pet = {
  name: 'buddy',
  type: 'dog',
};
delete pet.name;
delete pet.type;

console.log('pet:', pet);
