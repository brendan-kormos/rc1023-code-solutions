import { underThirty } from './underThirty';

// Your code goes here
describe('underThirty', function () {
  it('verifies that an array gets returned containing objects with ages that are less than 30', function () {
    const parameter = [
      {
        name: {
          first: 'Shawn',
          last: 'Kost',
        },
        age: 99,
        id: 1,
      },
      {
        name: {
          first: 'Joe',
          last: 'Schmoe',
        },
        age: 17,
        id: 2,
      },
    ];
    const expected = [
      { name: { first: 'Joe', last: 'Schmoe' }, age: 17, id: 2 },
    ];
    const result = underThirty(parameter);
    expect(result).toStrictEqual(expected);
  });
  it('verifies that those with an age that are exactly 30 do not get returned within array', function () {
    const parameter = [
      {
        name: {
          first: 'Trevor',
          last: 'James',
        },
        age: 30,
        id: 1,
      },
      {
        name: {
          first: 'Ellen',
          last: 'Garcia',
        },
        age: 30,
        id: 2,
      },
      {
        name: {
          first: 'Benny',
          last: 'Duncan',
        },
        age: 27,
        id: 3,
      },
    ];
    const expected = [
      { name: { first: 'Benny', last: 'Duncan' }, age: 27, id: 3 },
    ];
    const result = underThirty(parameter);
    expect(result).toStrictEqual(expected);
  });
});
