/* exported getKeys */
//  define a function anamed getKeys with one parameter, object
//    create an array and assign it to the variable newArray
//    create a loop to iterate over each key and add that to newArray
//  return newArray
function getKeys(object) {
  const newArray = [];
  for (const key in object) newArray.push(key);
  return newArray;
}
