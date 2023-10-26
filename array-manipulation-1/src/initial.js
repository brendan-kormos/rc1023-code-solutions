/* exported initial */
// define a function named initial with one array parameter named array
//  create a new array named newArray
//  create a loop to iterate over each element before the last:
//    push each element to newArray
//  return newArray
function initial(array) {
  const newArray = [];
  for (let i = 0; i < array.length - 1; i++) newArray.push(array[i]);
  return newArray;
}
