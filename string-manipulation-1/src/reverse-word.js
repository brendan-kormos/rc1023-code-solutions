/* exported reverseWord */
function reverseWord(string) {
  let newWord = '';
  for (let i = string.length - 1; i > -1; i--) {
    newWord += string[i];
  }
  return newWord;
}
