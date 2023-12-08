interface Person {
  name: { first: string; last: string };
  age: number;
  id: number;
}
type People = Person[];

export function underThirty(people: Person[]): People {
  const peopleUnderThirty = people.filter((person) => person.age < 30);
  return peopleUnderThirty;
}
