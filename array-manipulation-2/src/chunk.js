/* exported chunk */
function chunk(array, size) {
  const newArray = [];
  let tempArray;
  // does javascript have a function/method to just completely replace the need for what i've done below?
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
