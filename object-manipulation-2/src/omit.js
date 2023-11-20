/* exported omit */
//  define a function named pick with 2 parameters, source and keys
//    create a new object
//    create a loop to iterate through the source object
//      create a new loop to see if the current key exists in the keys list
//    if the key doesn't exist, add it to our new object
//    return the new object
function omit(source, keys) {
  const newObj = {};
  for (const key in source) {
    const value = source[key];
    let foundValue = false;
    for (let i = 0; i < keys.length; i++) {
      if (key === keys[i]) {
        foundValue = true;
        break;
      }
    }
    if (foundValue === false) newObj[key] = value;
  }
  return newObj;
}
