/* exported filterOutStrings */
function filterOutStrings(values) {
  const newArray = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number' || values[i] === null) {
      newArray.push(values[i]);
    }
  }
  return newArray;
}
