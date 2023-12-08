import { firstChars } from './first-chars';

// Your code goes here

describe('firstChars', function () {
  it('only one first character is returned', function () {
    const testString = 'React';
    const result = firstChars(1, testString);
    expect(result).toMatch('R');
  });
  it('four characters are returned', function () {
    const testString = 'JavaScript';
    const result = firstChars(4, testString);
    expect(result).toMatch('Java');
  });
  it('works if specified length is greater than string length', function () {
    const testString = 'LearningFuze';
    const result = firstChars(30, testString);
    expect(result).toMatch('LearningFuze');
  });
  it('if string has 0 characters, returns emptry string', function () {
    const testString = '';
    const result = firstChars(5, testString);
    expect(result).toMatch('');
  });
});
