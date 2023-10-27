/* exported truncate */
//  define a function named truncate with 2 parameters, length and string
//    grab characters between the first element and length, concatenate that with "..." , then return the value of this expression
function truncate(length, string) {
  return string.substring(0, length) + '...';
}
