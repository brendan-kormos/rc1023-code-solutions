interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

const student: StudentProps = {
  firstName: 'Brendan',
  lastName: 'Kormos',
  age: 21,
};

const fullName: string = student.firstName + ' ' + student.lastName;
console.log('fullName', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Game Developer';
console.log('livesInIrvine', student.livesInIrvine);
console.log('previousOccupation', student.previousOccupation);

console.log('student', student);
interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

const vehicle: Vehicle = {
  make: 'Chevrolet',
  model: 'Camaro',
  year: 2024,
};
vehicle['color'] = 'red';
vehicle['isConvertible'] = false;

console.log('color', vehicle.color);
console.log('isConvertible', vehicle.isConvertible);
console.log('vehicle', vehicle);

interface Pet {
  name?: string;
  kind?: boolean;
}
const pet: Pet = {
  name: 'Buddy',
  kind: true,
};
delete pet.kind;
delete pet.name;
console.log('pet', pet);
