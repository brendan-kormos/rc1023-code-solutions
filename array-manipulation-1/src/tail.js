/* exported tail */
// define a function named tail with one array parameter named array
//  create a new array named newArray
//  create a loop to iterate over each element after the first:
//    push each element to newArray
//  return newArray
function tail(array) {
  const newArray = [];
  for (let i = 1; i < array.length; i++) newArray.push(array[i]);
  return newArray;
}
