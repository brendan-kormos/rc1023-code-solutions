import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', function () {
  it('takes an array with more than 4 elements and returns even numbers', function () {
    const array = [0, 1, 2, 3, 4];
    const result = evenNumbers(array);
    expect(result).toEqual([0, 2, 4]);
  });
  it('takes an array with 4 elements and returns even numbers', function () {
    const array = [0, 1, 2, 3];
    const result = evenNumbers(array);
    expect(result).toEqual([0, 2]);
  });
  it('takes an array with 1 elements and returns even numbers', function () {
    const array = [0];
    const result = evenNumbers(array);
    expect(result).toEqual([0]);
  });
  it('takes an array with 0 elements and returns an empty array', function () {
    const array: [] = [];
    const result = evenNumbers(array);
    expect(result).toEqual([]);
  });
  it('does not modify original array', function () {
    const array = [2, 4];
    const result = evenNumbers(array);
    expect(result).not.toBe(array);
  });
});

describe('toDollars', function () {
  it('formats numbers with digits down to the hundredth not ending in 0', function () {
    const number = 3.11;
    const result = toDollars(number);
    expect(result).toMatch('$3.11');
  });
  it('formats numbers with digits down to the tenth', function () {
    const number = 3.1;
    const result = toDollars(number);
    expect(result).toMatch('$3.10');
  });
  it('formats double digits', function () {
    const number = 12.11;
    const result = toDollars(number);
    expect(result).toMatch('$12.11');
  });
  it('formats 0 to $0', function () {
    const number = 0;
    const result = toDollars(number);
    expect(result).toMatch('$0.00');
  });
});

describe('divideBy', function () {
  it('divides 2 integers by 2', function () {
    const array = [2, 4];
    const result = divideBy(array, 2);
    expect(result).toEqual([1, 2]);
  });
  it('divides 1 integer by 2', function () {
    const array = [2];
    const result = divideBy(array, 2);
    expect(result).toEqual([1]);
  });
  it('divides 3 or more integers by 2', function () {
    const array = [2, 4, 6, 8, 10];
    const result = divideBy(array, 2);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
  it('does not modify original array', function () {
    const array = [2, 4];
    const result = divideBy(array, 2);
    expect(result).not.toBe(array);
  });
  it('takes an array with 0 elements and returns an empty array', function () {
    const array: [] = [];
    const result = divideBy(array, 2);
    expect(result).toEqual([]);
  });
});

describe('multiplyBy', function () {
  it('multiplies a number', function () {
    const obj = { hello: 3 };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ hello: 6 });
  });
  it('multiplies numerous numbers', function () {
    const obj = { hello: 1, test: 5, anotherTest: 10 };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ hello: 2, test: 10, anotherTest: 20 });
  });
  it('modifies the same object', function () {
    const obj = { hello: 3 };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toBe(obj);
  });
  it('does not multiply string values', function () {
    const obj = { hello: 3, test: '5' };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ hello: 6, test: '5' });
  });
});
