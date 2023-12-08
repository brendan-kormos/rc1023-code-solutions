import { charCounts } from './charCounts';

// Your code goes here
describe('charCounts', function () {
  it('each unique character is its own key and the value is how many times it was iterated over', function () {
    const parameter = 'pepper';
    const expected = { p: 3, e: 2, r: 1 };
    const result = charCounts(parameter);
    expect(result).toStrictEqual(expected);
  });
  it('each each character is shown in lowercase', function () {
    const parameter = 'PaSseNgEr';
    const expected = { p: 1, a: 1, s: 2, e: 2, n: 1, g: 1, r: 1 };
    const result = charCounts(parameter);
    expect(result).toStrictEqual(expected);
  });
  it('spaces count as a character', function () {
    const parameter = 'Hello World';
    const expected = { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 };
    const result = charCounts(parameter);
    expect(result).toStrictEqual(expected);
  });
  it('if string is empty, empty object is returned', function () {
    const parameter = '';
    const expected = {};
    const result = charCounts(parameter);
    expect(result).toStrictEqual(expected);
  });
});
