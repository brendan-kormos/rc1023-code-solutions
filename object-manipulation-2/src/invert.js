/* exported invert */
//  create a function named invert with one parameter, source
//    create a new object named newObject
//    create a loop to iterate through the source object
//      assign the current key to the current value of the newObject variable
//  return newObject
function invert(source) {
  const newObject = {};
  for (const key in source) {
    newObject[source[key]] = key;
  }
  return newObject;
}
