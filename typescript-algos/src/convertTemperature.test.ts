import { convertTemperature } from './convertTemperature';

// Your code goes here
describe('convertTemperature', function () {
  it('converts celsius to kelvin', function () {
    let celsius = 36.5;
    let expectedResult = [309.65, 97.7];
    expect(convertTemperature(celsius)[0]).toEqual(expectedResult[0]);

    celsius = 122.11;
    expectedResult = [395.26, 251.798];
    expect(convertTemperature(celsius)[0]).toEqual(expectedResult[0]);
  });
  it('converts celsius to fahrenheit', function () {
    let celsius = 36.5;
    let expectedResult = [309.65, 97.7];
    expect(convertTemperature(celsius)[1]).toEqual(expectedResult[1]);

    celsius = 122.11;
    expectedResult = [395.26, 251.798];
    expect(convertTemperature(celsius)[1]).toEqual(expectedResult[1]);
  });
  it('converts celsius to fahrenheit', function () {
    const celsius = 0;
    const expectedResult = [273.15, 32];
    expect(convertTemperature(celsius)).toEqual(expectedResult);
  });
});
