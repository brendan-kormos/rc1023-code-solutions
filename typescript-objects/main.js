var student = {
  firstName: 'Brendan',
  lastName: 'Kormos',
  age: 21,
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('fullName', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Game Developer';
console.log('livesInIrvine', student.livesInIrvine);
console.log('previousOccupation', student.previousOccupation);
console.log('student', student);
var vehicle = {
  make: 'Chevrolet',
  model: 'Camaro',
  year: 2024,
};
vehicle['color'] = 'red';
vehicle['isConvertible'] = false;
console.log('color', vehicle.color);
console.log('isConvertible', vehicle.isConvertible);
console.log('vehicle', vehicle);
var pet = {
  name: 'Buddy',
  kind: true,
};
delete pet.kind;
delete pet.name;
console.log('pet', pet);
