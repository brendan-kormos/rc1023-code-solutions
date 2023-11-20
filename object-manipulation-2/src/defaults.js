/* exported defaults */
//  create a new function called defaults with 2 parameters, target and source
//    loop through the source object
//      if the current key doesn't exist in the target object, assign the current source value to target with the same key
function defaults(target, source) {
  for (const key in source) {
    if (target[key] === undefined) target[key] = source[key];
  }
}
