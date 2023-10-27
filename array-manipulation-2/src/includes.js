/* exported includes */
//  define a function named includes with 2 parameters, array and value
//    search for the value inside of array and return if it's been found or not
function includes(array, value) {
  return array.find((element) => element === value) !== undefined;
}
