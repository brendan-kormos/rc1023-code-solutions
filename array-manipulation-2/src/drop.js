/* exported drop */

//  define a function named drop with 2 parameters, array and count
//    copy the elements in array after the specified count and return it

function drop(array, count) {
  return array.slice(count, array.length);
}
