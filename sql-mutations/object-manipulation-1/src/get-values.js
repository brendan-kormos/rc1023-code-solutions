/* exported getValues */
// create a new function named getValues with one parameter, object
//    create an array and assign it to the variable newArray
//    create a loop to iterate over each value and add that to newArray
//  return newArray
function getValues(object) {
  const newArray = [];
  for (const key in object) newArray.push(object[key]);
  return newArray;
}
