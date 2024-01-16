import { fuzeBuzz } from './fuzeBuzz';

// Your code goes here
describe('fuzeBuzz', function () {
  it('returns an array of strings up to the limit of 2', function () {
    const parameter = 2;
    const expected = ['1', '2'];
    const result = fuzeBuzz(parameter);
    expect(result).toEqual(expected);
  });
  it('returns an array of strings up to the limit of 3, if number is divisible by three, "Learning" is inserted ', function () {
    const parameter = 3;
    const expected = ['1', '2', 'Learning'];
    const result = fuzeBuzz(parameter);
    expect(result).toEqual(expected);
  });
  it('returns an array of strings up to the limit of 15, if number is divisible by five, "LearningFuze" is inserted ', function () {
    const parameter = 15;
    const expected = [
      '1',
      '2',
      'Learning',
      '4',
      'Fuze',
      'Learning',
      '7',
      '8',
      'Learning',
      'Fuze',
      '11',
      'Learning',
      '13',
      '14',
      'LearningFuze',
    ];
    const result = fuzeBuzz(parameter);
    expect(result).toEqual(expected);
  });
});
