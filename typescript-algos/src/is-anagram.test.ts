import { isAnagram } from './is-anagram';

// Your code goes here

describe('isAnagram', function () {
  it('first test', function () {
    const string1 = 'astronomer';
    const string2 = 'moon starer';
    const result = isAnagram(string1, string2);
    expect(result).toBe(true);
  });
  it('second test', function () {
    const string1 = 'listen';
    const string2 = 'silent';
    const result = isAnagram(string1, string2);
    expect(result).toBe(true);
  });
  it('third test', function () {
    const string1 = 'programmer';
    const string2 = 'poor gamer';
    const result = isAnagram(string1, string2);
    expect(result).toBe(false);
  });
  it('fourth test', function () {
    const string1 = 'red dad';
    const string2 = 'rad ede';
    const result = isAnagram(string1, string2);
    expect(result).toBe(false);
  });
});
