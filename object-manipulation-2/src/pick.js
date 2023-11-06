/* exported pick */
//  define a function named pick with 2 parameters, source and keys
//    create a new object
//    create a loop to iterate through keys:
//      if you find the key in the table and it isn't undefined, add the value of the key from the source object into our new object
//    return the new object
function pick(source, keys) {
  const newObj = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (source[keys[i]] !== undefined) newObj[key] = source[key];
  }
  return newObj;
}
