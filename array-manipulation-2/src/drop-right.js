/* exported dropRight */
//  define a function named dropRight with 2 parameters, array and count
//    remove elements the specified number of elements from right to left and return the result
function dropRight(array, count) {
  return array.slice(
    count > array.length && array.length, // if the count is larger than the array, set it's length to itself to prevent any values from getting through
    array.length - count
  );
}
