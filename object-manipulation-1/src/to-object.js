/* exported toObject */
function toObject(keyValuePair) {
  const obj = {};
  for (let i = 0; i < keyValuePair.length; i += 2)
    obj[keyValuePair[i]] = keyValuePair[i + 1];
  return obj;
}
