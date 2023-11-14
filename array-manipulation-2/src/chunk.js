/* exported chunk */
function chunk(array, size) {
  const newArray = [];
  let tempArray;
  // is there another function/method to just completely replace what i've done below?
  array.forEach(function (element, index) {
    if (index % size === 0) {
      tempArray = [element];
      newArray.push(tempArray);
      return;
    }
    tempArray.push(element);
  });
  return newArray;
}
