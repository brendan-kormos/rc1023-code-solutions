/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  const array = string.split('');
  array[firstIndex] = string[secondIndex];
  array[secondIndex] = string[firstIndex];
  return array.join('');
}
